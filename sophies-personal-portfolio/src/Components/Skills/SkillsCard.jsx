import './Skills.css'

const SkillsCard = ( {skill, image} ) => {
  return (
    <div className = "rounded-xl h-[300px] w-[400px] bg-[#302c76FF] max-sm:w-[350px]">
      <div className = "flex flex-col items-center translate-y-1/5">
        <img src = {image} className = "h-[200px]"/>
        <h3 className = "text-white"> {skill} </h3>
      </div>
    </div>
  )
}

export default SkillsCard