// 프로필 이미지 관련 변수
var profileImageContainer = document.querySelector('.profile-image');
var profileImageIcon = document.querySelector('.profile-image i.fas.fa-user');
var profileImageInput = document.getElementById('profile-img-upload');

// 프로필 이미지 수정 버튼 클릭 시 파일 선택 창 열기
profileImageContainer.addEventListener('click', function() {
  profileImageInput.click();
});

// 이미지 선택 시 미리보기
profileImageInput.addEventListener('change', function(event) {
  var selectedImage = event.target.files[0];
  var imageURL = URL.createObjectURL(selectedImage);
  profileImageContainer.style.backgroundImage = 'url(' + imageURL + ')';
  profileImageContainer.style.backgroundSize = 'cover';
  profileImageContainer.style.backgroundPosition = 'center';
  profileImageIcon.style.display = 'none';
  localStorage.setItem('profileImage', imageURL);
});

// 초기 실행 시 프로필 이미지 불러오기
var storedProfileImage = localStorage.getItem('profileImage');
if (storedProfileImage) {
  profileImageContainer.style.backgroundImage = 'url(' + storedProfileImage + ')';
  profileImageContainer.style.backgroundSize = 'cover';
  profileImageContainer.style.backgroundPosition = 'center';
  profileImageIcon.style.display = 'none';
}