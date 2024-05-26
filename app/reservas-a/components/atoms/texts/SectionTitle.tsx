interface SectionTitleProps {
  text: string
  id?: string
  sx?: any
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, id }) => {
  return (
    <div className="title">
      <p id={id}>{text}</p>
    </div>
  )
}

export default SectionTitle
