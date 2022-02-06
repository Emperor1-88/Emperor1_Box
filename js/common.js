var $slide = document.querySelector(".slide");
var $right = document.querySelector(".slide .bt .bt_icon2");
var $left = document.querySelector(".slide .bt .bt_icon1");
var i = 1;

$right.addEventListener("click", function(){
    i++
    $slide.style.backgroundImage = `url(./img/main_slide0${i}.jpg)`;
    if(i >= 4){
        i = 0;
    }
});
$left.addEventListener("click", function(){
    i--
    $slide.style.backgroundImage = `url(./img/main_slide0${i}.jpg)`;
    if(i <= 1){
        i = 5;
    }
});




var $header = document.querySelector("#header");
var $header_box = `
    <header>
            <div class="logo">
                
            </div>
            <nav>
                <div class="menu">
                    <div class="menubox">
                        <a href="">Hanwha E&C</a> 
                        <ul>
                            <li><a href="">경영이념</a></li>
                            <li><a href="">연혁</a></li>
                            <li><a href="">조직도</a></li>
                            <li><a href="">재무정보</a></li>
                            <li><a href="">CI</a></li>
                            <li><a href="">BI</a></li>
                            <li><a href="">찾아오시는길</a></li>
                        </ul>
                    </div>
                    <div class="menubox">
                        <a href="">BUSINESS</a> 
                        <ul>
                            <li><a href="">토목 사업</a></li>
                            <li><a href="">건축 사업</a></li>
                            <li><a href="">주택 사업</a></li>
                            <li><a href="">플랜트 사업</a></li>
                            <li><a href="">기술연구소</a></li>
                        </ul>
                    </div>
                    <div class="menubox">
                        <a href="">PR CENTER</a>
                        <ul>
                            <li><a href="">사회공헌</a></li>
                            <li><a href="">공익사업</a></li>
                            <li><a href="">활동내용</a></li>
                            <li><a href="">윤리경영</a></li>
                            <li><a href="">공지사항</a></li>
                            <li><a href="">사내소식</a></li>
                            <li><a href="">홍보자료실</a></li>
                        </ul>
                    </div>
                    <div class="menubox">
                        <a href="">CAREERS</a>
                        <ul>
                            <li><a href="">인재개발</a></li>
                            <li><a href="">인사제도</a></li>
                            <li><a href="">직무소개</a></li>
                            <li><a href="">채용공고</a></li>
                            <li><a href="">채용FAQ</a></li>
                        </ul>
                    </div>
                    <div class="menubox">
                        <a href="">CUSTOMER</a>
                        <ul>
                            <li><a href="">고객문의</a></li>
                            <li><a href="">고객문의확인</a></li>
                            <li><a href="">사이버신문고</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="util">
                <div class="language"></div>
                <div class="language"></div>
                <div class="burger"></div>
            </div>
        </header> 
`;
$header.innerHTML =  $header_box;

var $footer = document.querySelector("#footer");
var $footer_box = `
        <footer>
            <div class="footerbox">
                <div class="logo"></div>
                <div class="text_box">
                    <div class="text"><p>해외현장 임직원가족 | 개인정보 처리방침 | 공정거래 사업지침 | 협력업체 시스템</p></div>
                    <div class="copyright"><p>
                        서울시 영등포구 여의대로 24 전경련회관<br>
                        TEL 02.2055.6000 080.729.2400 <br>
                        Copyright 2022 Hanwha Engineering & Construction corp. (14px / #fff)
                    </p></div>
                </div>
                <div class="sns">
                    <div class="icon">
                        <div class="icon_box"></div>
                        <div class="icon_box"></div>
                        <div class="icon_box"></div>
                        <div class="icon_box"></div>
                    </div>
                    <div class="site"></div>
                </div>
            </div>
        </footer>
`;

$footer.innerHTML = $footer_box;

