const express = require('express')
const router = express.Router()

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


router.post('/FEWCheckTeachingResponsibilities', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var confirmTeachingResponsibilities = req.session.data['TeachingResponsibilities']

  // Check whether the variable matches a condition
  if (confirmTeachingResponsibilities == "No"){
    // Send user to next page
    res.redirect('/FEWAddJobRoleCompleted')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWWhatQualsProgrammes')
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




module.exports = router
