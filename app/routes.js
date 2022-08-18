const express = require('express')
const router = express.Router()
const teacherSubRoles = ["Advanced Practitioner", "Instructor", "Lecturer", "Practitioner", "Teacher", "Trainer", "Tutor"] 
const managerSubRoles = ["Curriculum Lead", "Faculty Lead", "Functional Manager", "Head of Department", "Programme Lead", "Quality Assurance Manager" ] 
const seniorLeaderSubRoles = ["Assistant Head", "Assistant Principal", "CEO", "Director", "Executive Head Teacher", "Managing Director", "Principal", "Senior Manager", "Vice-Principal"] 
const teachingSupportSubRoles = ["Assessor", "Behaviour Specialist", "Bilingual Support Assistant", "Careers Advisor", "Counsellor", "Cover Supervisor", "Education Welfare Officer", "Higher Level Teaching Assistant", "Language Support", "Learning Facilitator", "Learning Mentor", "Learning Support", "Learning Support Assistant (SEN)", "Librarian", "Pastoral Support", "SEN Co-ordinator", "Teaching Assistant", "Technician", "Therapist"] 
const administrationSubRoles = ["Administrator", "Admissions", "Apprenticeships Administrator", "Bursar", "Business Manager", "Clerk", "Communication Support", "Data Analyst", "DSL and Safe Guarding Officer", "Employer Engagement Examinations Administrator", "External Grants and Funding", "Finance Officer", "Human Resources (HR)", "ICT Network Manager", "Information Services (MIS)", "Marketing Administrator", "Office Manager", "Payroll Administrator", "Programme Recruitment", "Receptionist", "Secretary", "Technology Support" ] 



// Add your routes here - above the module.exports line


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/FEWCollectionSelection', function (req, res) {

    // Make a variable and give it the value from 'SelectedOption'
    var selectedOption = req.session.data['SelectedOption']
  
    // Check whether the variable matches a condition
    if (selectedOption == "staff"){
      // Send user to next page
      res.redirect('/FEWSelectMethodRecordStaffData')
    } else {
      // Send user to ineligible page
      res.redirect('/FEWVacancyStart')
    }
})



router.post('/FEWStaffMethodSelection', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var selectedOptionStaff = req.session.data['SelectedOptionStaff']

  // Check whether the variable matches a condition
  if (selectedOptionStaff == "online"){
    // Send user to next page
    res.redirect('/FEWStaffSummaryOpen')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWUploadStaffFile')
  }
})


router.post('/FEWTeachingVacanciesSelection', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var selectedTeachingVacancies = req.session.data['TeachingVacancies']

  // Check whether the variable matches a condition
  if (selectedTeachingVacancies == "No"){
    // Send user to next page
    res.redirect('/FEWApprentices')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWNumberVacancies')
  }
})


router.post('/FEWTeachingRecruitment', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var selectedTeachingRecruitment = req.session.data['TeachingRecruitment']

  // Check whether the variable matches a condition
  if (selectedTeachingRecruitment == "No"){
    // Send user to next page
    res.redirect('/FEWApprentices')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWDifficultRecruitment')
  }
})


router.post('/FEWCounsellingServices', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var selectedCounsellingService = req.session.data['CounsellingService']

  // Check whether the variable matches a condition
  if (selectedCounsellingService == "Yes"){
    // Send user to next page
    res.redirect('/FEWWhenIsCounsellingAvailable')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWCheckYourAnswers')
  }
})


router.post('/FEWGConfirmNumberBoard', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var confirmBoardNumbers = req.session.data['ConfirmBoard']

  // Check whether the variable matches a condition
  if (confirmBoardNumbers == "True"){
    // Send user to next page
    res.redirect('/FEWGBoardGender')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWGBoardRepresentation')
  }
})







router.post('/FEWWhatQualsProgs', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var confirmWhatQualsProgs = req.session.data['WhatQualsProgs']

  // Check whether the variable matches a condition
  if (confirmWhatQualsProgs == "Academic"){
    // Send user to next page
    res.redirect('/FEWAcademicQuals')
  } else if (confirmWhatQualsProgs == "Vocational"){
    // Send user to ineligible page
    res.redirect('/FEWVocationalProgs')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWOtherLearningProgs')
  }
})


router.post('/InYearVacancies', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var confirmVacancies = req.session.data['Vacancies']

  // Check whether the variable matches a condition
  if (confirmVacancies == "Yes"){
    // Send user to next page
    res.redirect('/FEWGBoardMemberVacancies')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWGCheckYourAnswers')
  }
})



router.post('/ConfirmSameOrg', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var confirmSameOrg = req.session.data['SameOrg']

  // Check whether the variable matches a condition
  if (confirmSameOrg == "Yes"){
    // Send user to next page
    res.redirect('/FEWTeachingEmploymentContractCompleted')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWNoLongerWorks')
  }
})




router.post('/ConfirmMainContract', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var MainContract = req.session.data['MainContract']

  // Check whether the variable matches a condition
  if (MainContract == "Permanent"){
    // Send user to next page
    res.redirect('/FEWWeeklyHours')
  } else if (MainContract == "FixedTerm"){
    // Send user to ineligible page
    res.redirect('/FEWWeeklyHours')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWSalary')
  }
})


router.post('/FEWCheckHighestTeachingQualification', function (req, res) {


  var Studying = req.session.data['HighestTeachingQual']

  // Check whether the variable matches a condition
  if (Studying == "Working towards a teacher training qualification"){
    // Send user to next page
    res.redirect('/FEWTeachingQualStudying')

    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWTeachingStatus')
  }
})


router.post('/FEWSelectSubRoles', function (req, res) {


  var SubRoles = req.session.data['SubRole']
  var JobRole = req.session.data['JobRole']

  // Check whether the variable matches a condition
  if (SubRoles.length ==1 &&  (JobRole == "Teacher" ||"Teacher" in JobRole) ) { 
    // Send user to next page
    res.redirect('/FEWWhatQualsProgrammes')


  } else if (SubRoles.length ==1 && (JobRole == "Senior Leader"||"Senior Leader" in JobRole)){
    // Send user to ineligible page
    res.redirect('/FEWLeaderHead')

  } else if (SubRoles.length ==1 && (JobRole == "Manager"||"Manager" in JobRole )){
    // Send user to ineligible page
    res.redirect('/FEWTeachingResponsibilities')

  } else if (SubRoles.length ==1 && (JobRole == "Teaching Support"||"Teaching Support" in JobRole)){
    // Send user to ineligible page
    res.redirect('/FEWTeachingResponsibilities')


  } else if (SubRoles.length ==1 && (JobRole == "Administration"||"Administration" in JobRole)){
    // Send user to ineligible page
    res.redirect('/FEWTeachingResponsibilities')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWMainRole')
    
  }
})


router.post('/FEWSelectMainRole', function (req, res) {

  var MainRole = req.session.data['MainRole']
  var JobRole = req.session.data['JobRole']
  var TeachingResponsibilities = req.session.data['TeachingResponsibilities']

  // Check whether the variable matches a condition
  if (MainRole == "Advanced Practitioner" 
  || MainRole == "Instructor"
  || MainRole == "Lecturer"
  || MainRole == "Practitioner"
  || MainRole == "Teacher"
  || MainRole == "Trainer"
  || MainRole == "Tutor"){
    // Send user to ineligible page
    res.redirect('/FEWWhatQualsProgrammes')


  } else if (MainRole == "Assistant Head"
  ||MainRole == "Assistant Principal"
  ||MainRole == "CEO"
  ||MainRole == "Director"
  ||MainRole == "Executive Head Teacher"
  ||MainRole == "Managing Director"
  ||MainRole == "Principal"
  ||MainRole == "Senior Manager"
  ||MainRole == "Vice-Principal"){
    // Send user to ineligible page
    res.redirect('/FEWLeaderHead')

  } else if (JobRole.includes("Teacher") || JobRole == "Teacher" || TeachingResponsibilities =="Yes"){
    // Send user to ineligible page
    res.redirect('/FEWWhatQualsProgrammes')

    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWTeachingResponsibilities')
    
  }
})


router.post('/FEWRouteFromHeadFE', function (req, res) {

  var JobRole = req.session.data['JobRole']
  var TeachingResponsibilities = req.session.data['TeachingResponsibilities']

  // Check whether the variable matches a condition
 if (JobRole.includes("Teacher") || JobRole == "Teacher" || TeachingResponsibilities =="Yes") {
    // Send user to ineligible page
    res.redirect('/FEWWhatQualsProgrammes')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWTeachingResponsibilities')
    
  }
})


router.post('/FEWRouteFromHeadFE', function (req, res) {

  var JobRole = req.session.data['JobRole']

  // Check whether the variable matches a condition
 if (JobRole.includes("Teacher") || JobRole == "Teacher"){
    // Send user to ineligible page
    res.redirect('/FEWWhatQualsProgrammes')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWTeachingResponsibilities')
    
  }
})

router.post('/FEWRouteFromTeachingResponsibilities', function (req, res) {

  var TeachingResponsibilities = req.session.data['TeachingResponsibilities']

  // Check whether the variable matches a condition
 if (TeachingResponsibilities == "Yes"){
    // Send user to ineligible page
    res.redirect('/FEWAddSubRole')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWAddJobRoleCompleted')
    
  }
})



module.exports = router
