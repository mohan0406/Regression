$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "Validate login func",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is in fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_in_fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and passwpord and click login button.",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_username_and_passwpord_and_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_logged_in()"
});
formatter.result({
  "status": "passed"
});
});