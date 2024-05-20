interface SectionTitleProps {
  text: string
  sx?: any
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <div className="title">
      <p>{text}</p>
    </div>
  )
}

export default SectionTitle
