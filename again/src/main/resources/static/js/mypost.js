// mypost.js

// DOM 요소 가져오기
const myPostList = document.getElementById('my-post-list');

// 가상의 작성한 글 데이터
const posts = [
  {
    title: '첫 번째 글',
    content: '첫 번째 글 내용',
    date: '2023-06-01'
  },
  {
    title: '두 번째 글',
    content: '두 번째 글 내용',
    date: '2023-06-02'
  },
  // 추가적인 작성한 글 데이터를 여기에 추가할 수 있습니다.
];

// 작성한 글 목록을 생성하는 함수
function renderMyPostList() {
  // 기존에 표시된 목록 삭제
  myPostList.innerHTML = '';

  // 작성한 글 데이터를 순회하며 목록에 추가
  posts.forEach((post) => {
    const postItem = document.createElement('div');
    postItem.classList.add('my-post-item');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = post.title;

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = post.content;

    const date = document.createElement('div');
    date.classList.add('date');
    date.textContent = post.date;

    postItem.appendChild(title);
    postItem.appendChild(content);
    postItem.appendChild(date);

    myPostList.appendChild(postItem);
  });
}

// 작성한 글 목록을 렌더링
renderMyPostList();
