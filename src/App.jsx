import React from 'react'
import Card from './Card'

function App() {

let data = [

{
plan: "Free",
price : '$0' ,
user: "Single User",
userEnabler : true,
storage: "5GB Storage",
storageEnabler : true,
publicProjects: "Unlimited Public Projects",
publicProjectsEnabler : true,
communityAccess: "Community Access",
communityAccessEnabler : true,
PrivateProjects: "Unlimited Private Projects",
PrivateProjectsEnabler : false,
support: "Dedicated Phone Support",
supportEnabler : false,
subDomain: "Free Subdomains",
subDomainEnabler : false,
reports: "Monthly Status Reports",
reportsEnabler : false,

},

{
  plan: "Plus",
  price : '$9' ,
  user: "5 Users",
  userEnabler : true,
  storage: "50GB Storage",
  storageEnabler : true,
  publicProjects: "Unlimited Public Projects",
  publicProjectsEnabler : true,
  communityAccess: "Community Access",
  communityAccessEnabler : true,
  PrivateProjects: "Unlimited Private Projects",
  PrivateProjectsEnabler : true,
  support: "Dedicated Phone Support",
  supportEnabler : true,
  subDomain: "Free Subdomains",
  subDomainEnabler : true,
  reports: "Monthly Status Reports",
  reportsEnabler : false,
  
  },

  {
    plan: "Pro",
    price : '$49' ,
    user: " Unlimited Users",
    userEnabler : true,
    storage: "150GB Storage",
    storageEnabler : true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler : true,
    communityAccess: "Community Access",
    communityAccessEnabler : true,
    PrivateProjects: "Unlimited Private Projects",
    PrivateProjectsEnabler : true,
    support: "Dedicated Phone Support",
    supportEnabler : true,
    subDomain: "Free Subdomains",
    subDomainEnabler : true,
    reports: "Monthly Status Reports",
    reportsEnabler : true,
    
    }

]

  return <>
  
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
     
     {
      data.map((e,i)=>{
        return <Card key={i} data={e} />
      })
     }
        

      </div>
    </div>
  </section>
  </>
   
  
}

export default App

