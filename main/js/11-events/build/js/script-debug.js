"use strict";

var addStudentForm = document.querySelector('.add-student-form');
var courseListWrapper = document.querySelector('.course-list tbody');
var courseList = [];
var studentList = [];
var counter = 1;
addStudentForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var formElement = this.querySelectorAll('input, select');

  if (validateElementForm(formElement)) {
    createCourse(createCourseObject(formElement));
  }
});
courseListWrapper.addEventListener('click', function (e) {
  var target = e.target;

  if (target.classList.contains('remove-course') && confirm('?')) {
    removeCourse(target);
  }

  if (target.classList.contains('add-student')) {
    e.preventDefault();
    addStudent(prompt("User name", "Petya Petya"), target);
  }
});

function addStudent(userName, target) {
  var courseId = target.dataset.courseId;
  var courseIndex = findIndexCourseById(courseId);

  if (courseIndex !== -1) {
    courseList[courseIndex].studentList.push(userName);
    renderUserToHtml(userName, target);
  }
}

function renderUserToHtml(userName, target) {
  var teplate = getStudentTemplate(userName);
  var studentListWraper = target.closest('td').querySelector('.students-list');
  studentListWraper.insertAdjacentHTML('beforeend', teplate);
}

function removeCourse(target) {
  var indexCourse = findIndexCourseById(target.dataset.courseId);

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
  var template = getCourseTemplate(course);
  var tr = document.createElement('tr');
  tr.classList.add('inner-box');
  tr.innerHTML = template;
  courseListWrapper.append(tr);
  courseList.push(course);
}

function createCourseObject(formElement) {
  var course = {
    id: counter++,
    studentList: []
  };
  formElement.forEach(function (element) {
    course[element.getAttribute('name')] = element.value;
  });
  return course;
}

var speakerList = {
  1: 'Speaker One',
  2: 'Speaker Two',
  3: 'Speaker Three'
};

function getStudentTemplate(userName) {
  return "<li class=\"students-list__item\">\n    <span>".concat(userName, "</span>\n    <button type=\"button\" class=\"btn btn-danger\">Remove</button>\n</li>");
}

function getCourseTemplate(course) {
  return "\n    <th scope=\"row\">\n        <div class=\"event-date\">\n            <p>".concat(course['start-date'], "</p>\n            <p>Duration: ").concat(course.duration, " days</p>\n            <p>Course Name: ").concat(course['course-name'], " </p>\n        </div>\n    </th>\n    <td>\n        <div class=\"event-img\">\n            <img width=\"150\" src=\"./images/avatar").concat(course.speakers, ".png\" alt=\"\" />\n        </div>\n        <h3>").concat(speakerList[course.speakers], "</h3>\n    </td>\n    <td>\n        <ul class=\"students-list\"></ul>\n        <div class=\"primary-btn\">\n            <a data-course-id=\"").concat(course.id, "\" class=\"btn btn-primary add-student\" href=\"#\">Add Students</a>\n        </div>\n    </td>\n    <td class=\"align-middle\">\n        <button data-course-id=\"").concat(course.id, "\" type=\"button\" class=\"btn btn-danger remove-course\">Remove Course</button>\n    </td>");
}

function clearErrorMessage(formElement) {
  formElement.forEach(function (element) {
    var errorMessageElement = element.parentElement.querySelector('.error');

    if (errorMessageElement) {
      errorMessageElement.remove();
    }
  });
}

function validateElementForm(formElement) {
  if (!formElement) return false;
  var isValid = true;
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
  var message = element.dataset.errorMessage;
  var divMessage = document.createElement('div');
  divMessage.classList.add('error');
  divMessage.textContent = message;
  element.parentElement.append(divMessage);
}