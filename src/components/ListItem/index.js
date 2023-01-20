import './index.css'

const ListItem = props => {
  const {selectItem, onClickChangeCountry} = props
  const {capitalDisplayText, id} = selectItem

  const changeCountry = () => {
    onClickChangeCountry(id)
  }

  return (
    <option className="value" value={id} onClick={changeCountry}>
      {capitalDisplayText}
    </option>
  )
}

export default ListItem
