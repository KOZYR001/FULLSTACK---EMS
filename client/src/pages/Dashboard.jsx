import { dummyAdminDashboardData, dummyEmployeeDashboardData } from "../assets/assets"
import AdminDashboard from "../components/AdminDashboard"
import EmployeeDashboard from "../components/EmployeeDashboard"
import Loading from "../components/Loading"

const Dashboard = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      setData(dummyEmployeeDashboardData)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    },[])
  
    if(loading) return <Loading />
    if(!data) return <p className="text-center text-slate-500 py-12">Failed to load dashboard</p>
  
    if(data.role === "ADMIN") {
      return <AdminDashboard data={data}/>
    }else{
      return <EmployeeDashboard data={data}/>
    }

  }

export default Dashboard
