# ref: DOM에 이름 달기

> HTML에서 id를 사용하여 DOM에 이름을 다는 것처럼 **리액트 프로젝트 내부에서 DOM에 이름을 다는 방법** reference의 줄임말 **ref**

- 사용 시기

  - **DOM을 꼭 직접적으로 건드려야 할 때**

- 리액트 컴포넌트에서 state 사용 순서

  - **ValidationSample 컴포넌트 만들기** => **input에 ref 달기** => **버튼을 누를 때마다 input에 포커스 주기**

- 예제 컴포넌트

  **ValidationSample.css**

  ```react
  .success {
      background-color: lightgreen;
  }

  .failure {
      background-color: lightcoral;
  }
  ```

  **ValidationSample.js**

  ```react
  class ValidationSample extends Component {
      state = {
          password: '',
          clicked: false,
          validated: false
      }

      handleChange = (e) => {
          this.setState({
              password: e.target.value
          });
      }

      handleButtonClick = () => {
          this.setState({
              clicked: true,
              validated: this.state.password === '0000'
          });
      }

      handleKeyPress = (e) => {
          if(e.key === 'Enter'){
              this.handleButtonClick();
          }
      }

      render(){
          return(
              <div>
                  <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                  />
                  <button onClick={this.handleButtonClick}>검증하기</button>
              </div>
          );
      }
  }
  ```

- DOM을 꼭 사용해야 하는 상황(state만으로 해결 할 수 없는 기능) => **ref 사용**

  - 특정 input에 포커스 주기
  - 스크롤 박스 조작하기
  - Canavas 요소에 그림 그리기

- ref 사용법

  - ```react
    <input ref={(ref) => {this.input=ref}}></input>
    ```

    - **this.input** 은 input 요소의 DOM을 가리킴
    - DOM 타입과 관계없이 **this.superman = ref** 처럼 마음대로 지정

- input에 포커스 주기

  ```react
  class ValidationSample extends Component {
      state = {
          password: '',
          clicked: false,
          validated: false
      }

      handleChange = (e) => {
          this.setState({
              password: e.target.value
          });
      }

      handleButtonClick = () => {		// input에 포커스를 주었다.
          this.setState({
              clicked: true,
              validated: this.state.password === '0000'
          });
          this.input.focus();
      }

      handleKeyPress = (e) => {
          if(e.key === 'Enter'){
              this.handleButtonClick();
          }
      }

      render(){
          return(
              <div>
                  <input
                  ref={(ref) => this.input = ref}		// ref를 달았다.
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                  />
                  <button onClick={this.handleButtonClick}>검증하기</button>
              </div>
          );
      }
  }
  ```

- 컴포넌트에 ref 달기

  - 사용법

    ```react
    <MyComponent
      ref={(ref) => {this.myComponent = ref}}
      />
    ```

  - 부모 컴포넌트에서 스크롤바 내리기 순서

    - **ScrollBox 컴포넌트 만들기** => **컴포넌트에 ref 달기** => **ref를 이용하여 컴포넌트 내부 메서드 호출하기**

  - 컴포넌트 초기 설정

    **ScrollBox.js**

    ```react
    class ScrollBox extends Component {
        render(){
            const style = {
                border: '1px solid black',
                height: '300px',
                width: '300px',
                overflow: 'auto',
                position: 'relative'
            };

            const innerStyle = {
                width: '100%',
                height: '650px',
                background: 'linear-gradient(white, black)'
            }
            return(
                <div //ref를 달았음
                style={style}
                ref={(ref) => {this.box=ref}}>		
                    <div style={innerStyle}/>
                </div>
            );
        }
    }
    ```

- **비구조화 할당 문법**

  ```react
  /특정 값 추출하여 따로 레퍼런스를 만드는 경우
  /////////////////////////////////////
  const object = {
    foo: 1,
    bar: 2
  }

  const {foo, bar} = object;
  console.log(foo, bar);	//1 2

  /함수의 파라미터를 설정하는 경우
  /////////////////////////////////////
  const object = {
    foo: 1,
    bar: 2
  };

  function print({foo, bar}) {
    console.log(foo, bar);
  }

  print(object);	//1 2

  /리액트 컴포넌트에서 state나 props를 참조하는 경우
  /////////////////////////////////////
  render(){
    const { name, number } = this.props;
    return (
      <div>
      	<div>{name}</div>
        	<div>{number}</div>
      </div>
    )
  }
  ```

  **주로 코드의 가독성과 편리함 때문에 사용**

- ​

  ​