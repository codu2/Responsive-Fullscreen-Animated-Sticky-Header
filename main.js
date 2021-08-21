window.addEventListener('scroll', function () {
    const header = this.document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0);
    /*toggle() : 하나의 인수만 있을 때 클래스 값을 토글링, 
    두번째 인수가 있을 때 두번째 인수가 true로 평가되면 지정된 클래스 값을 추가하고 
    false로 평가되면 제거함*/
});

const navigation = document.querySelector('nav');

document.querySelector('.toggle').onclick = function () {
    navigation.classList.toggle('active');
}


