# react_clone
Making movie web service with react ( nomadcoder clone )

<h2>Lecture summary</h2>

- js는 html -> js 순서라면 react는 js -> html 순서이다.

- js가 element를 생성하고 react가 그걸 html로 번역하고, 업데이트할 수 있다.

- jsx는 js의 확장 문법으로, html 문법과 유사하다.

- jsx를 이용하여 컴포넌트를 다른 컴포넌트로 넣을 때 컴포넌트 변수명 첫 글자 반드시 대문자로 작성.

- 그리고 <Button /> 처럼 사용할 때 Button 컴포넌트 변수를 함수로 만들어 줘야함 (arrow function 이용해도 됨)

- react는 변경된 부분만 업데이트를 하는데, vanilla js를 작성하여 쓴 브라우저는 노드 정보가 바뀔 때 마다 5단계에 걸쳐서 노드트리를 처음부터 다시 재생성. 리액트는 가상 돔을 써 우리 눈에 보이는 부분만 수정해 보여주고 모든 업데이트가 끝나면 일괄적으로 실제 돔에 적용한다.

- 변수를 jsx에 전달하는 법 : {} 사이에 변수 넣으면 끝.

- 일일히 ReactDOM.render()을 이용해 리렌더링을 해주지 않고 간편하게 하는 법 : React.useState()를 이용한다.

- React.useState()를 이용할 때 구조분해할당을 이용해 편리하게 할당 가능

ex)

```
const [counter,setCounter] = React.useState(0);
```

- 위의 코드에서 counter는 현재 값 state고, setCounter는 이벤트 발생 시 변화를 주는 부분이며 이후 counter로 다시 저장된다.

- react는 실제로 바뀌는 값이 있으면 그 컴포넌트 자체가 리렌더링된다. (불필요한 리렌더링 제외하고)

- state를 세팅하는 방법으로 2가지가 있는데, 첫번째로는 직접 할당하는 방법 : setState(state+1), 두번째로는 함수를 할당하는 방법 : setState(state=>state+1)

- 함수로 할당하는 방법이 더 안전하다.

- react에서 jsx를 사용하면서 return 문을 사용할 때 최상위 태그가 있어야한다!

- react에서 중괄호 속에 js 작성할 수 있다.

- props 를 이용하여 컴포넌트에 속성을 전달해 줄 수 있다.

- props는 객체로, 구조분해 할당을 이용해 사용하면 편리하다.

- props에 function도 보낼 수 있다. (주의점 : 이벤트 리스너를 props로 보내도 그저 props일 뿐, 이벤트리스너의 효과는 없다!)

- 불필요한 re-rendering은 React.memo()로 관리할 수 있다 (Effective!)

- react는 props에 파라미터를 잘못 넘겨도 확인할 수 없기때문에  PropTypes 모듈이 존재한다.

```
MemoryBtn.propTypes = {
    text: PropTypes.string.isRequired,
    fontsize: PropTypes.number,
  };
```

- 위의 코드처럼 string, number 등 타입을 확인하고 다르면 콘솔에 warning을 뜨게할 수 있고, isRequired를 이용하여 값이 입력되지 않았을 경우도 warning을 뜨게할 수 있다.

- create-react-app을 이용하면 1개의 컴포넌트당 하나의 js파일을 가질 수 있어 모듈화가 가능함.

- 컴포넌트별 스타일은 .module.css 파일을 생성하여 import 후 사용할 수 있다. (css 코드를 자바스크립트 객체로 변환시켜준다.)

- 여기서 말하는 스타일은 className이나 id로 import한 스타일 객체의 property를 전달하여 적용된다.

- 스타일이 적용된 컴포넌트를 확인해보면 무작위의 className이나 id가 붙는데, 이는 일일이 .css 파일의 className이나 id를 기억할 필요가 없다는 말!

- state를 변경할 때 기존 하던 방식은 모든 코드들이 렌더링이 되는데, 첫 번째 렌더링만 실행하고 이후 state 변화를 없게 하려면 ?

- useEffect()를 이용한다 !

- useEffect()는 두개의 argument를 가지는데, 첫번째 argument는 우리가 한번만 실행할 코드, 두번째 argument는 [] 배열(dependencies)을 넣어줌.

- useEffect()의 두번째 argument의 []에 값을 넣으면 그 값이 변화될때만 첫번째 argument의 코드들이 실행된다.

- 컴포넌트가 destroy 될 때도 코드로 실행할 수 있는데, useEffect()에서 return 에다가 코드를 넣으면 실행된다. (clean-up)

- state는 직접적으로 수정 불가능하여 state를 수정하는 함수로 수정을 해야한다.

- 예를 들어 array state에 다른 element를 추가한다고 하면

```
const [todos,setTodos]=useState([]);
setTodos((current)=>[todo,...current]);
```

- then 대신 async-await를 보편적으로 이용한다.

- map 함수를 사용할 때 key값(고유값)을 입력 해주어야 한다.

- react는 route(page) 단위로 생각하고 만들어야한다.

- Route를 만들면 그 안에 넣어준게 렌더링 된다.