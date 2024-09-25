document.addEventListener('DOMContentLoaded', function() {
//typiing
  const typingText = "Join SKYLER coding club today!";
  let typingIndex = 0;

  const typingTextElement = document.getElementById('typing-text');

  function typeTypingText() {
      if (typingIndex < typingText.length) {
          typingTextElement.textContent += typingText.charAt(typingIndex);
          typingIndex++;
          setTimeout(typeTypingText, 100);
      }
  }

  typeTypingText();

//汉堡菜单
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function(event) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        event.stopPropagation(); // 阻止事件冒泡
    });
    document.addEventListener("click", function () {
      if(navLinks.style.display === 'flex'){
        navLinks.style.display =  'none';
      }
    });


//报名
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = e.target[0].value;
        const age = e.target[1].value;
        const phone = e.target[2].value;

        const emailBody = `Name: ${name}\nAge: ${age}\nPhone: ${phone}`;
        window.location.href = `mailto:jie164@icloud.com?subject=Student Registration&body=${encodeURIComponent(emailBody)}`;
        signupForm.reset();
    });

//scroll 触发
    const courses = document.querySelectorAll('.course-item');
    const lineContainers = document.querySelectorAll('.line-container');

    function checkVisibility() {
        const triggerPoint = window.innerHeight * 0.75; // 设定触发的阈值

        // 检测课程卡片
        courses.forEach(course => {
            const boxTop = course.getBoundingClientRect().top; // 获取卡片顶部相对于视口的距离

            if (boxTop < triggerPoint) {
                course.classList.add('visible'); // 添加visible类
            }
            else {
              if (course.classList.contains('visible')) {
                course.classList.remove('visible')
              }
            }
            // 检测竖线容器
            lineContainers.forEach((lineContainer, index) => {
                const prevCourse = courses[index]; // 当前竖线前面的卡片
                const boxBottom = prevCourse.getBoundingClientRect().bottom; // 获取前面卡片底部相对于视口的距离
                if (boxBottom < triggerPoint) {
                    lineContainer.classList.add('visible'); // 添加visible类
                }
                else {
                  if (lineContainer.classList.contains('visible')) {
                    lineContainer.classList.remove('visible')
                  }
                }
            });
        });



    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 初始检查





});

//scroll trigger
const triggers = document.querySelectorAll('.scroll-trigger');

triggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
