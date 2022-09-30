const addStudentForm = document.querySelector('.add-student-form');
const courseListWrapper = document.querySelector('.course-list tbody');
const courseList = [];
const studentList = [];
let counter = 1;

addStudentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formElement = this.querySelectorAll('input, select');

    if (validateElementForm(formElement)) {
        createCourse(createCourseObject(formElement));
    }
});

courseListWrapper.addEventListener('click', function (e) {
    const target = e.target;

    if (target.classList.contains('remove-course') && confirm('?')) {
        removeCourse(target);
    }

    if (target.classList.contains('add-student')) {
        e.preventDefault();
        addStudent(prompt("User name", "Petya Petya"), target);
    }
});

function addStudent(userName, target) {
    const courseId = target.dataset.courseId;
    const courseIndex = findIndexCourseById(courseId);

    if (courseIndex !== -1) {
        courseList[courseIndex].studentList.push(userName);
        renderUserToHtml(userName, target);
    }
}

function renderUserToHtml(userName, target) {
    const teplate = getStudentTemplate(userName);

    const studentListWraper = target.closest('td').querySelector('.students-list');

    studentListWraper.insertAdjacentHTML('beforeend', teplate);

}

function removeCourse(target) {
    const indexCourse = findIndexCourseById(target.dataset.courseId)

    if (indexCourse !== -1) {
        courseList.splice(indexCourse, 1);
        removeDomElementCourse(target);
    }
}

function removeDomElementCourse(button) {
    button.closest('.inner-box').remove();
}

function findIndexCourseById(id) {
    return courseList.findIndex(function (course) {
        console.log(course.id, id);
        return course.id === +id;
    });
}

function createCourse(course) {
    const template = getCourseTemplate(course);
    const tr = document.createElement('tr');

    tr.classList.add('inner-box');

    tr.innerHTML = template;

    courseListWrapper.append(tr);
    courseList.push(course);
}

function createCourseObject(formElement) {
    const course = {
        id: counter++,
        studentList: [],
    };

    formElement.forEach(function (element) {
        course[element.getAttribute('name')] = element.value;
    });

    return course;
}

const speakerList = {
    1: 'Speaker One',
    2: 'Speaker Two',
    3: 'Speaker Three',
}

function getStudentTemplate(userName) {
    return `<li class="students-list__item">
    <span>${userName}</span>
    <button type="button" class="btn btn-danger">Remove</button>
</li>`
}

function getCourseTemplate(course) {
    return `
    <th scope="row">
        <div class="event-date">
            <p>${course['start-date']}</p>
            <p>Duration: ${course.duration} days</p>
            <p>Course Name: ${course['course-name']} </p>
        </div>
    </th>
    <td>
        <div class="event-img">
            <img width="150" src="./images/avatar${course.speakers}.png" alt="" />
        </div>
        <h3>${speakerList[course.speakers]}</h3>
    </td>
    <td>
        <ul class="students-list"></ul>
        <div class="primary-btn">
            <a data-course-id="${course.id}" class="btn btn-primary add-student" href="#">Add Students</a>
        </div>
    </td>
    <td class="align-middle">
        <button data-course-id="${course.id}" type="button" class="btn btn-danger remove-course">Remove Course</button>
    </td>`;
}

function clearErrorMessage(formElement) {
    formElement.forEach(function (element) {
        const errorMessageElement = element.parentElement.querySelector('.error');

        if (errorMessageElement) {
            errorMessageElement.remove();
        }
    });
}

function validateElementForm(formElement) {
    if (!formElement) return false;

    let isValid = true;

    clearErrorMessage(formElement);

    formElement.forEach(function (element) {
        if (element.classList.contains('reqaired') && !element.value) {
            showErrorMessage(element);
            isValid = false;
        }
    });

    return isValid;
}

function showErrorMessage(element) {
    if (!element) return;

    const message = element.dataset.errorMessage;

    const divMessage = document.createElement('div');
    divMessage.classList.add('error');
    divMessage.textContent = message;

    element.parentElement.append(divMessage);
}
