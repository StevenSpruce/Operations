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





module.exports = router
