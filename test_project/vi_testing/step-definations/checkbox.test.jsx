import { loadFeature, describeFeature } from "@amiceli/vitest-cucumber"

const feature = await loadFeature('vi_testing/features/2_check_box.feature')

describeFeature(feature, ({ BeforeAllScenarios, AfterAllScenarios, BeforeEachScenario, AfterEachScenario, Scenario }) => {
  BeforeAllScenarios(() => {})
  AfterAllScenarios(() => {})
  BeforeEachScenario(() => {})
  AfterEachScenario(() => {})

  Scenario(`checkbox if checkbox renders and button is clickable`, ({ Given, Then }) => {
      Given(`John sees the checkbox is loaded`, () => { 
        
      })
      Then(`John check the checkbox`, () => { 

      })
  })

})