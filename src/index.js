import Senators from './data/senators'

export const republicans = () => {
  return Senators.filter(senator => senator.party === 'Republican')
}

export const democrats = () => {
  return Senators.filter(senator => senator.party === 'Democrat')
}

export const independents = () => {
  return Senators.filter(senator => senator.party === 'Independent')
}

export const males = () => {
  return Senators.filter(senator => senator.person.gender === 'male')
}

export const females = () => {
  return Senators.filter(senator => senator.person.gender === 'female')
}

export const byState = (state = 'UT') => {
  return Senators.filter(senator => senator.state === 'UT')
}

  export const mapping = () => {
     return Senators.map (senator => {
      return {
              firstName: senator.person.firstname,
              lastName: senator.person.lastname,
              party: senator.party,
              gender: senator.person.gender
   
    }})
}

export const birthplaceSeniorSenator = () => {
  
  const senatorState = Senators.filter(senator => senator.state === 'CA' && senator.senator_rank === 'senior')
  const senatorSenior = senatorState.reduce(senior => senior)
  return senatorSenior
  
}



