import constants from "../../../constants"
import { join_bg } from "../assets"
import PageHeader from "../common/shared/PageHeader"

const Join = () => {
  return (
    <div className="">
      <PageHeader
        title="JOIN US"
        backgroundImage={join_bg}
        description={`Interested in joining the ${constants.webInfo.name} team as a local or remote collaborator?`}
      />
    </div>
    )
}

export default Join