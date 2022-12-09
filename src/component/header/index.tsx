import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'

const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  )


const Index = ({ backFunc, title}: {back: boolean, backFunc: () => void, title: string}) => {
    const back = () =>
    Toast.show({
      content: '토스트',
      duration: 1000,
    })
    
  
    return (
        <NavBar right={right} onBack={back}>
        헤더
      </NavBar>
    )
}

export default Index