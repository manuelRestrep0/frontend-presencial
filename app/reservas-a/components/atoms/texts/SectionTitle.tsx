interface SectionTitleProps {
  text: string
  sx?: any
  id: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, id }) => {
  return (
    <div className="title">
      <p id={id}>{text}</p>
    </div>
  )
}

export default SectionTitle
