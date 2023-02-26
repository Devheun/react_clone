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