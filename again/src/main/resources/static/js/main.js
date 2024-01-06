window.addEventListener('DOMContentLoaded', function() {
  var section = document.querySelector('.main_info1');
  var infoTxt = section.querySelector('.info_txt1');
  var mainSearch = document.querySelector('.main_search');
  var isVisible = false; // 글씨가 보이는 상태 여부를 저장하는 변수

  function checkVisibility() {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;
    var triggerOffset = windowHeight / 2 + 50; // 화면 중앙으로부터의 오프셋 설정 (+50px 아래로 조정)

    if (scrollPosition > sectionTop - triggerOffset && scrollPosition < sectionTop + sectionHeight - triggerOffset) {
      if (!isVisible) {
        infoTxt.classList.add('show');
        isVisible = true; // 글씨가 보이는 상태로 변경
      }
    } else {
      if (scrollPosition > sectionTop + sectionHeight - triggerOffset) {
        infoTxt.classList.add('show');
        isVisible = true; // 글씨가 보이는 상태로 변경
      } else {
        infoTxt.classList.remove('show');
        isVisible = false; // 글씨가 사라진 상태로 변경
      }
    }

    // main_search 요소에 대한 가시성 체크
    var mainSearchTop = mainSearch.offsetTop;
    var mainSearchHeight = mainSearch.offsetHeight;
    
    if (scrollPosition > mainSearchTop - windowHeight + mainSearchHeight / 2) {
      mainSearch.classList.add('show');
    } else {
      mainSearch.classList.remove('show');
    }
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();
});


  
  // JavaScript
const locationBtn = document.getElementById('location_btn');
const dropdownContent = document.querySelector('.dropdown_content');

locationBtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

// 각 지역 선택 버튼을 클릭했을 때의 동작
const locationButtons = dropdownContent.querySelectorAll('button');
locationButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const selectedLocation = button.value;
    locationBtn.textContent = selectedLocation;
    dropdownContent.classList.remove('show');
  });
});
