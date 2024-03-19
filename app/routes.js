//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here



// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/FEWCollectionSelection', function (req, res) {

    // Make a variable and give it the value from 'SelectedOption'
    var selectedOption = req.session.data['SelectedOption']
    var staffComplete = req.session.data['CompleteStaffCollection']
    var vacancyComplete = req.session.data['CompleteVacancyCollection']
    
  
    // Check whether the variable matches a condition
    if (selectedOption == "staff" && staffComplete == "Complete"){
      // Send user to next page
      res.redirect('/FEWSelectCollectionTypeStaff')
    } else if (selectedOption == "staff"){
      // Send user to ineligible page
      res.redirect('/FEWSelectMethodRecordStaffData')


    } else if (selectedOption == "vacancyAndRecruitment"  && vacancyComplete == "Complete"){
      // Send user to ineligible page
      res.redirect('/FEWSelectCollectionTypeVacancy')
      
  
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



router.post('/TeachingQualification', function (req, res) {


  var Studying = req.session.data['TeachingQual']

  // Check whether the variable matches a condition
  if (Studying == "Yes"){
    // Send user to next page
    res.redirect('/FEWTeachingQualStudying')

    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWTeachingStatus')
  }
})



router.post('/FEWSelectSubRoles', function (req, res) {

  console.log("in FEW select sub roles");

  var SubRoles = req.session.data['SubRole']
  var JobRole = req.session.data['JobRole']

  console.log("sub roles are "+SubRoles);
  console.log("job roles are "+JobRole);
  console.log(SubRoles.length);
  console.log(typeof SubRoles);


  var isMoreThanOneSubRole = typeof SubRoles==="object" && SubRoles.length > 1

  if(isMoreThanOneSubRole) {
    // Send user to ineligible page
    console.log("we are in six else");
    res.redirect('/FEWMainRole')
  }

  // Check whether the variable matches a condition
  else if ((JobRole == "Teacher") ) { 
    console.log("we are in one");
    // Send user to next page
    res.redirect('/FEWWhatQualsProgrammes')


  } else if ((JobRole == "Senior Leader")){
    console.log("we are in two");
    // Send user to ineligible page
    res.redirect('/FEWLeaderHead')

  } else if ((JobRole == "Manager")){
    console.log("we are in three");
    // Send user to ineligible page
    res.redirect('/FEWTeachingResponsibilities')

  } else if ((JobRole == "Teaching Support")){
    console.log("we are in four");
    // Send user to ineligible page
    res.redirect('/FEWTeachingResponsibilities')


  } else if ((JobRole == "Administration")){
    console.log("we are in five");
    // Send user to ineligible page
    res.redirect('/FEWTeachingResponsibilities')
    
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



router.post('/FEWRouteFromDFEProg', function (req, res) {

  var DFEProg = req.session.data['DFEProg']

  // Check whether the variable matches a condition
 if (DFEProg == "Yes"){
    // Send user to ineligible page
    res.redirect('/FEWTeachingDFEProgrammes')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWTeachingPrior')
    
  }
})



router.post('/FEWStaffDataSelected', function (req, res) {

    res.redirect('/FEWSelectMethodRecordStaffData')
  
})

router.post('/FEWVacancyDataSelected', function (req, res) {

  res.redirect('/FEWVacancyStart')

})



router.post('/FEWCompleteStaffCollection', function (req, res) {

  var CompleteStaffCollection = req.session.data['CompleteStaffCollection']

  // Check whether the variable matches a condition
 if (CompleteStaffCollection == "Complete"){
    // Send user to ineligible page
    res.redirect('/FEWCompleteStaffCollectionConfirmation')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWCompleteStaffCollectionError1')
    
  }
})



router.post('/FEWDirecttoComplete', function (req, res) {

  res.redirect('/FEWCompleteStaffCollection')

})



router.post('/FEWStaffCollectionIsComplete', function (req, res) {

  // Make a variable and give it the value from 'SelectedOption'
  var staffComplete = req.session.data['CompleteStaffCollection']

  // Check whether the variable matches a condition
  if (staffComplete == "Complete"){
    // Send user to next page
    res.redirect('/FEWSelectCollectionTypeStaffEnd')
  } else {
    // Send user to ineligible page
    res.redirect('/FEWCompleteStaffCollection')
  }
})


router.post('/FEWHighest', function (req, res) {

  var Highest = req.session.data['HighestTeachingQual']

  // Check whether the variable matches a condition
 if (Highest == "NoneTTQ"){
    // Send user to ineligible page
    res.redirect('/FEWTeachingQualStudying')

  } else if (Highest == "None"){
    // Send user to ineligible page
    res.redirect('/FEWTeachingStatus')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWTeacherTrainingQual')
    
  }
})



router.post('/FEWCompleteVacancyCollection', function (req, res) {

  var CompleteVacancyCollection = req.session.data['CompleteVacancyCollection']

  // Check whether the variable matches a condition
 if (CompleteVacancyCollection == "Complete"){
    // Send user to ineligible page
    res.redirect('/FEWCompleteVacancyCollectionConfirmation')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWCompleteStaffCollectionError1')
    
  }
})


router.post('/WeeksYearError', function (req, res) {

  var weeksayear = req.session.data['weeksayear']

  // Check whether the variable matches a condition
 if (weeksayear >=0 & weeksayear <54){
    // Send user to ineligible page
    res.redirect('/FEWFTE')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWWeeksAYearError')
    
  }
})

router.post('/FEWSeniorLeaderManagementVacancies', function (req, res) {

  var Leaders = req.session.data['howManySeniorLeaderOrManagerVacanciesDidYouHave']

  console.log(Leaders)


  // Check whether the variable matches a condition
 if (Leaders ==""){
    // Send user to ineligible page
    
       res.redirect('/FEWSeniorLeaderManagementVacanciesError')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWTeachingVacancies')
    
  }
})




router.post('/FEWVacancyStart', function (req, res) {

  var Leaders = req.session.data['howManySeniorLeaderOrManagerVacanciesDidYouHave']

  console.log(Leaders)


  // Check whether the variable matches a condition
 if (Leaders ==""){
    // Send user to ineligible page
    
       res.redirect('/FEWSeniorLeaderManagementVacancies')
    
  } else {
    // Send user to ineligible page
    res.redirect('/FEWCheckYourAnswers')
    
  }
})



router.post('/SBRDMethodSelection', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var SelectedOptionSBRD = req.session.data['SelectedOptionSBRD']

  // Check whether the variable matches a condition
  if (SelectedOptionSBRD == "csv"){
    // Send user to next page
    res.redirect('/SBRD_Upload')
  } else {
    // Send user to ineligible page
    res.redirect('/SBRD_bootcampdetails')
  }
})





router.post('/SBRDCalcMethod', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var calcmethod = req.session.data['calcmethod']

  // Check whether the variable matches a condition
  if (calcmethod == "SBC01"||calcmethod == "SBC03"||calcmethod == "HGV01"||calcmethod == "HGV02"||calcmethod == "HGV03"||calcmethod == "HGV04"||calcmethod == "HGV05"){
    // Send user to next page
    res.redirect('/SBRD_contractdetails')
  } else {
    // Send user to ineligible page
    res.redirect('/SBRD_MidCourse')
  }
})

router.post('/SBRDStart', function (req, res) {

  // Make a variable and give it the value from 'FEWStaffMethodSelection'
  var calcmethod = req.session.data['calcmethod']

  // Check whether the variable matches a condition
  if (calcmethod == "SBC01"||calcmethod == "SBC03"){
    // Send user to next page
    res.redirect('/SBRD_Completion')
  } else {
    // Send user to ineligible page
    res.redirect('/SBRD_MidCourse')
  }
})