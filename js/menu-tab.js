//DOM 노드 찾기
var items=$('.menu-item');
var btn=$('.btn-menu')
var panel = $('.board section');
var tab = $('.tab');

//기능구현 e=>event의 약자로 입력
btn.click(function(e){
  e.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act')
})


tab.click(function(e){
  e.preventDefault();//a태그가 이미 가진 이벤트를 취소해줌
  panel.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
});