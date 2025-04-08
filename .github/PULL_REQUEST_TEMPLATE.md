## 신경써서 구현한 부분
 - 미디어쿼리를 사용하여 화면의 넓이에 따라 구성이 변하도록 반응형 웹을 구성했습니다.
    + 데스크탑(기본)
        - `text-box`에 마우스를 올리면 색상이 변하도록 구현하였습니다.
            >`transition`을 통해 좀 더 부드러운 효과를 주었습니다.
            ``` css
                .box-txt {
                    background-color: white;
                    color: black;
                    font-size: 30px;
                    font-weight: bold;
                    width: 170px;
                    height: 180px;
                    border: 1px solid orange;
                    border-radius: 20px;
                    text-align: center;
                    align-items: center;
                    align-content: center;
                    margin: 7px;
                }

                .box-txt:hover {
                    transition: color 0.3s;
                    background-color: orange;
                    color: white;
                }
            ```

    + 테블릿(`width` 767px ~ 1023px)
      - container들의 위치를 조정하였습니다.
      

   + 모바일(`width` 767px이하)
     - `mobile-login`버튼을 만들어 누르면 `login-form`이 뜨도록 하였습니다.
     - 오른쪽 상단에 `list_button`을 만들어서 누르면 `list`가 뜨게 만들었습니다.
     - `list`에 마우스를 올리면 글자색이 변하도록 만들었습니다.
        ```html
        <div class="list_bar">
            <button class="list_button">☰</button>
        </div>
        <nav class="list">
            <a href="#">P&D</a>
            <a href="#">FE</a>
            <a href="#">BE</a>
        </nav>
        ```

## 질문
