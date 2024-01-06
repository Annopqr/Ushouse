$(document).ready(function() {
  var terms1Clicked = false;
  var terms2Clicked = false;

  $("#view-terms1").click(function() {
    if (!terms1Clicked) {
      terms1Clicked = true;
      $.get("terms1.html", function(data) {
        showModal("이용약관", data, function() {
          terms1Clicked = false; // 모달 닫기 후 클릭 상태 초기화
        });
      });
    }
  });

  $("#view-terms2").click(function() {
    if (!terms2Clicked) {
      terms2Clicked = true;
      $.get("terms2.html", function(data) {
        showModal("개인정보 수집 동의", data, function() {
          terms2Clicked = false; // 모달 닫기 후 클릭 상태 초기화
        });
      });
    }
  });
});

function showModal(title, content, onClose) {
  // 모달 창 요소 생성
  var modal = document.createElement("div");
  modal.className = "modal";

  // 모달 내용 생성
  var modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  // 모달 제목 생성
  var modalTitle = document.createElement("h3");
  modalTitle.innerText = title;

  // 모달 본문 생성
  var modalBody = document.createElement("div");
  modalBody.innerHTML = content;

  // 모달 닫기 버튼 생성
  var closeButton = document.createElement("button");
  closeButton.className = "close-button";
  closeButton.innerText = "확인";
  closeButton.addEventListener("click", function() {
    document.body.removeChild(modal);
    if (typeof onClose === "function") {
      onClose(); // 모달 닫기 후 콜백 실행
    }
  });

  // 모달 요소 구조 설정
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);

  // 모달 창을 body에 추가
  document.body.appendChild(modal);
}

function submitForm() {
  // 이용약관 체크 여부 확인
  var terms1Checkbox = document.getElementById("terms1Checkbox");
  var terms1Warning = document.getElementById("terms1Warning");
  if (!terms1Checkbox.checked) {
    terms1Warning.style.display = "block";
    return;
  } else {
    terms1Warning.style.display = "none";
  }

  // 개인정보 수집 동의 체크 여부 확인
  var terms2Checkbox = document.getElementById("terms2Checkbox");
  var terms2Warning = document.getElementById("terms2Warning");
  if (!terms2Checkbox.checked) {
    terms2Warning.style.display = "block";
    return;
  } else {
    terms2Warning.style.display = "none";
  }

  // 이외의 필요한 코드 처리
  // ...
}
