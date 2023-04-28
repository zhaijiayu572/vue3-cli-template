import { ref } from 'vue'

export const SayHello = function (props) {
  const iSay = ref('i say Hello')
  return (
    <div>
      <h1>{iSay.value}</h1>
      <h2>{ props.itSay }</h2>
      <button onClick={() => {iSay.value + 'click'}}>123</button>
    </div>
  )
}
SayHello.props = ['itSay']