import {
    Navigate,
    Routes,
    Route,
    useLocation,
    useNavigate,
  } from 'react-router-dom';
  import {
    TransitionGroup,
    CSSTransition
  } from 'react-transition-group';
import styled from 'styled-components/macro';

import {
  Display,
  Footer,
  Note,
  List,
} from 'src/components';
import { useKeyPress } from 'src/hooks';
import map, { getNewPosition } from 'src/map';
import { Action, Category, Item, Position } from 'src/types';
import { colors, keyDirectionMap } from 'src/util';
import { DEFAULT_EASING, INITIAL_DELAY, INIT_DURATION } from './util/constants';

function App() {

  const location = useLocation();
  const categoryPath = location.pathname.split('/')[1] ?? null;
  const categoryIdx = map.findIndex(category => category.path === categoryPath);
  const itemPath = location.pathname.split('/')[2] ?? null;
  const itemIdx = map[categoryIdx]?.items.findIndex(item => item.path === itemPath) ?? -1;

  const navigate = useNavigate();

  const handleAction = ({ key }: KeyboardEvent): void => {
    const action: Action = Object.keys(keyDirectionMap).includes(key)
      ? keyDirectionMap[key]
      : key as ('Enter' | 'Escape');
    const newPos: Position = getNewPosition({ categoryIdx, itemIdx }, action);
    const categoryPathSegment = map[newPos.categoryIdx].path; 
    const itemPathSegment = newPos.itemIdx > -1 ? `/${map[newPos.categoryIdx].items[newPos.itemIdx].path}` : '';
    const newPath = `/${categoryPathSegment}${itemPathSegment}`;
    navigate(newPath);
  };
  useKeyPress([...Object.keys(keyDirectionMap), 'Enter', 'Escape'], handleAction);
  
  return (
    <>
      <ContentContainer>
        <ContentGrid>

          <CategoriesContainer>
            {map.map(category => (
              <TempSquare
                key={category.path}
                isSelected={category.path === categoryPath && itemPath === null}
                isActive={category.path === categoryPath && itemPath !== null}
                onClick={() => navigate(`/${category.path}`)}
              >{category.name}</TempSquare>
            ))}
          </CategoriesContainer>

          <ListTransitionGroup>
            <CSSTransition
              key={categoryPath}
              classNames='fade'
              timeout={INIT_DURATION}
            >
              <ListWrapper>
                <Routes {...{ location }} >
                  {map.map((category: Category) =>
                    <Route
                      key={category.path}
                      path={`/${category.path}/:itemPath?`}
                      element={
                        <List
                          key={category.path}
                          items={category.items.map(item => item.name)}
                          activeIdx={itemIdx}
                          handleItemClick={(item: string) => () => {
                            const itemPath = category.items.find(({ name }) => name === item)!.path;
                            navigate(`/${category.path}/${itemPath}`);
                          }}
                        />
                      }
                    />
                  )}
                  <Route
                    path='*'
                    element={<Navigate to={`/${map[0].path}`} replace />}
                  />
                </Routes>
              </ListWrapper>
            </CSSTransition>
          </ListTransitionGroup>

          <DisplayTransitionGroup>
            <CSSTransition
              key={categoryPath}
              classNames='fade'
              timeout={{
                enter: INITIAL_DELAY + INIT_DURATION,
                exit: INIT_DURATION,
              }}
            >
              <DisplayWrapper>
                <Routes {...{ location }}>
                  {map.map((category: Category) =>
                    category.items.map((item: Item) =>
                      <Route
                        key={`${category.path}-${item.path}`}
                        path={`/${category.path}/${item.path}`}
                        element={<Display header={item.name} />}
                      />
                    )
                  )}
                  <Route
                    path={`/${categoryPath}/:invalidItemPath`}
                    element={<Navigate to={`/${map[0].path}`} replace />}
                  />
                  <Route
                    path={`/${categoryPath}`}
                    element={<DisplayPlaceholder>Placeholder</DisplayPlaceholder>}
                  />
                </Routes>
              </DisplayWrapper>
            </CSSTransition>
          </DisplayTransitionGroup>
          
          <NoteTransitionGroup>
            <CSSTransition
              key={categoryPath}
              classNames='fade'
              timeout={{
                enter: INITIAL_DELAY + INIT_DURATION,
                exit: INIT_DURATION,
              }}
            >
              <NoteWrapper>
                <Routes {...{ location }} >
                  {map.map((category: Category) =>
                    <Route
                      key={category.path}
                      path={`/${category.path}/:itemPath?`}
                      element={
                        <Note
                          key={category.path}
                          text={category.description}
                        />
                      }
                    />
                  )}
                </Routes>
              </NoteWrapper>
            </CSSTransition>
          </NoteTransitionGroup>

        </ContentGrid>
      </ContentContainer>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
}

const DisplayPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.5;
  display: grid;
  place-content: center;
`;

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: columnn;
  justify-content: center;
  align-items: center;
`;

const categoriesHeight = 80;
const displayHeight = 580;
const noteHeight = 80;
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: ${categoriesHeight}px ${displayHeight - categoriesHeight}px ${noteHeight}px;
  grid-template-areas:
    'categories display'
    'select-list display'
    'note note'
  ;
  gap: 40px 20px;
`

const CategoriesContainer = styled.div`
  grid-area: categories;
  display: flex;
`;

const TempSquare = styled.div<{ isSelected: boolean, isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({ isSelected, isActive }) => isSelected
    ? colors.primary
    : isActive
      ? '#00c0ff85'
      : colors.inactive };
  color: ${({ isSelected, isActive }) => (isSelected || isActive)
    ? colors.white
    : colors.primary};
  margin-bottom: 40px;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const ListTransitionGroup = styled(TransitionGroup)`
  grid-area: select-list;
  display: grid;
  grid-template-areas: 'stack';
`;

const ListWrapper = styled.div`
  grid-area: stack;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity ${INIT_DURATION}ms ${DEFAULT_EASING};
  }
`;

const DisplayTransitionGroup = styled(TransitionGroup)`
  grid-area: display;
  display: grid;
  grid-template-areas: 'stack';
`;

const DisplayWrapper = styled.div`
  grid-area: stack;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity ${INIT_DURATION}ms ${DEFAULT_EASING} ${INITIAL_DELAY}ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity ${INIT_DURATION}ms ${DEFAULT_EASING};
  }
`;

const NoteTransitionGroup = styled(TransitionGroup)`
  grid-area: note;
  display: grid;
  grid-template-areas: 'stack';
`;

const NoteWrapper = styled.div`
  grid-area: stack;

  &.fade-enter {
    opacity: 0;
    transform: translateY(30px);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity ${INIT_DURATION}ms ${DEFAULT_EASING} ${INITIAL_DELAY}ms,
      transform ${INIT_DURATION}ms ${DEFAULT_EASING} ${INITIAL_DELAY}ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition:
      opacity ${INIT_DURATION}ms ${DEFAULT_EASING};
  }
`;

const FooterWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export default App;