# 컴포넌트 스타일링

- 다양한 방식들

  ```react
  .App { ... }
  .App .header { ... }
  .App .logo { ... }
  .App .intro { ... }
  //////////////////////////////////
  /Sass, LESS, Stylue 등의 CSS 전처리기 중 
  //Sass 사용시
    .App {
      .header { ... }
      .logo { ... }
      .intro { ... }
    }
             
  ```

- 컴포넌트 스타일링 방법

  - **CSS Module**
    - 모듈화된 CSS로 CSS 클래스를 만들면 자동으로 고유한 클래스네임을 생성하여 스코프 를 지역적으로 제한하는 방식
  - **Sass**(Syntactically Awesome Style Sheets)
    - 자주 사용하는 CSS 전처리기 중 하나로, 확장된 CSS 문법을 사용하여 CSS 코드를 더욱 쉽게 작성하는 방식
    - CSS Moudle처럼 사용하는 방법도 있음
  - **styled-components**
    - 요즘 대세인 컴포넌트 스타일링 방식으로, JS 코드 내부에서 스타일 정의

### CSS Module

> **CSS Moudle은 CSS를 모듈화**하여 사용하는 방식
>
> CSS 클래스를 만들면 자동으로 고유한 클래스네임을 생성하여 스코프를 지역적으로 제한한다.

- 모듈화된 CSS를 webpack으로 불러옴

  ```react
  // 이와 같이 사용자가 정의한 클래스네임과 고유화된 클래스네임으로 구성된 객체를 반환한다.
  {
    box: 'src-App__box--mjrNr'
  }
  ```

- 클래스를 적용할 때

  ```react
  className = {styles.box}
  ```



### Sass

> CSS pre-processor 로서 복잡한 작업을 쉽게 할 수 있게 해주고, 
>
> **코드의 재활용성과 코드의 가독성을 높여서 유지보수를 쉽게** 해준다.

- **.sass**

  ```react
  $font-stack:	Helvetica, sans-serif
  $primary-color: #333

  body
  	font: 100% $font-stack
  	color: $primary-color
  ```

- **.scss**

  ```react
  $font-stack:	Helvetica, sans-serif;
  $primary-color: $333;

  body {
    font: 100% $font-stack;
    color: $primary-color;
  }
  ```

- 준비작업

  **`$ yarn add node-sass`**

- 사용법 예제

  **App.js**

  ```react
  class App extends Component {
    render() {
      return <SassComponent/>;
    }
  }
  ```

  **SassComponent.js**

  ```react
  const SassComponent = () => {
      return (
          <div className="SassComponent">
              <div className="box red"/>
              <div className="box orange"/>
              <div className="box yellow"/>
              <div className="box green"/>
              <div className="box blue"/>
              <div className="box indigo"/>
              <div className="box violet"/>
          </div>
      );
  };
  ```

  **SassComponent.scss**

  ```react
  // 변수 사용하기
  $red: #fa5252;
  $orange: #fd7e14;
  $yellow: #fcc419;
  $green: #40c057;
  $blue: #339af0;
  $indigo: #5c7cfa;
  $violet: #7950f2;

  // mixin 만들기 (재사용되는 스타일 블록을 함수처럼 사용 가능)
  @mixin square($size) {
      $calculated: 32px * $size;
      width: $calculated;
      height: $calculated;
  }

  .SassComponent {
      display: flex;

      .box {
          background: red; // 일반 css 에선 .SassComponent .box 와 마찬가지
          cursor: pointer;
          transition: all 0.3s ease-in;

          &.red {
              // .red 클래스가 .box 와 함께 사용 됐을 때
              background: $red;
              @include square(1);
          }

          &.orange {
              background: $orange;
              @include square(2);
          }

          &.yellow {
              background: $yellow;
              @include square(3);
          }

          &.green {
              background: $green;
              @include square(4);
          }

          &.blue {
              background: $blue;
              @include square(5);
          }

          &.indigo {
              background: $indigo;
              @include square(6);
          }

          &.violet {
              background: $violet;
              @include square(7);
          }

          &:hover {
              // .box 에 마우스 올렸을 때
              background: black;
          }
      }
  }
  ```

- utils 함수 분리하기

  - src 폴더 내에 styles 폴더 생성
  - 안에 **utils.scss** 파일 생성후 기존 **SassComponent.scss**안에 있던 함수 분리해서 작성
  - **SassComponent.scss** 안에 @import 구문 넣어서 **utils.scss** 불러오기

  ​