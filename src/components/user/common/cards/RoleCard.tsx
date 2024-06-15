import { FaDotCircle } from "react-icons/fa"
import { h1Styles } from "../../../styles"

const RoleCard = ({ title, roleType, description }: IRoleCard) => {
    return (
        <div className="mb-10">
            <div className="flex gap-8 items-center">
                <h1 className={h1Styles}>{title}</h1>
                <span className="text-xs font-semibold bg-greyTextColor200 p-1 px-2 rounded-xl flex gap-2 items-center"><FaDotCircle className={`${roleType === RoleTypeEnum.FULL_TIME ? 'text-green-500' : 'text-yellow-500'}`} />{roleType}</span>
            </div>
            <p className="text-middleColor my-1">{description}</p>
        </div>
    )
}

export interface IRoleCard{
    title: string;
    roleType: RoleTypeEnum;
    description: string;
}

export enum RoleTypeEnum {
    PART_TIME = "Part-Time",
    FULL_TIME = "Full-Time"
}

export default RoleCard