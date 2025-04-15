import GitMainLayout from '../Layout/GitMainLayout'
import SubHeader from '../components/SubHeader'
import Body from '../components/Body'

function LandingPage() {
  return (
    <div>
      <GitMainLayout>
        <SubHeader />
        <Body />
      </GitMainLayout>
    </div>
  )
}

export default LandingPage