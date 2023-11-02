import APICallingUsingUseEffectAsysincAwait from '../modules/APICallingUsingUseEffectAsysincAwait';
import APICallingUsingUseEffectPromise from '../modules/APICallingUsingUseEffectPromise';
import ConditionalRendering from '../modules/ConditionalRendering';
import CounterUsingUseState from '../modules/CounterUsingUseState';
import FormUsingUseState from '../modules/FormUsingUseState';
import ImmediatlyInvokedFunction from '../modules/ImmediatlyInvokedFunction';
import LoopInJSX from '../modules/LoopInJSX';
import Menu from '../modules/Menu';
import ObjectWithUseState from '../modules/ObjectWithUseState';
import PassingFunctionWithProps from '../modules/PassingFunctionWithProps';
import PassingObjectWithProps from '../modules/PassingObjectWithProps';
import PassingProps from '../modules/PassingProps';
import PersistedMutableValue from '../modules/PersistedMutableValue';
import PreventingDefaultBehavior from '../modules/PreventingDefaultBehavior';
import RespondingToEvents from '../modules/RespondingToEvents';
import ShortHandCondition from '../modules/ShortHandCondition';
import SwitchInJSX from '../modules/SwitchInJSX';
import ToDoUsingUseState from '../modules/ToDoUsingUseState';
import UseRefInReact from '../modules/UseRefInReact';
import UseRefWorkingWithAttribute from '../modules/UseRefWorkingWithAttribute';
import ValuePickFromInput from '../modules/ValuePickFromInput';
import WorkingWithCSSUsingUseRef from '../modules/WorkingWithCSSUsingUseRef';
import WorkingWithPersistMutableValue from '../modules/WorkingWithPersistMutableValue';
import WorkingWithUseEffect from '../modules/WorkingWithUseEffect';

const HomePage = () => {

    const objProps = {
        userName:'Adil Amin',
        age: 25,
        city: "Dhaka"
    };
    
    const btnClick = ()=>{
        alert("You have passed a function with props!");
    }

    return (
        <div>
            <Menu/>
            <h2>This is Home Page!</h2>
      <ShortHandCondition/>
      <br />
      <ImmediatlyInvokedFunction/>
      <br />
      <LoopInJSX/>
      <br />
      <ConditionalRendering/>
      <br />
      <SwitchInJSX/>
      <br />
      <PassingProps title="Passing props to an elements!"/>
      <br />
      <PassingObjectWithProps userInfo={objProps}/>
      <br />
      <PassingFunctionWithProps funcProps={btnClick}/>
      <br />
      <RespondingToEvents/>
      <br />
      <PreventingDefaultBehavior/>
      <br />
      <UseRefInReact/>
      <br />
      <UseRefWorkingWithAttribute/>
      <br />
      <ValuePickFromInput/>
      <br />
      <WorkingWithCSSUsingUseRef/>
      <br />
      <PersistedMutableValue/>
      <br />
      <WorkingWithPersistMutableValue/>
      <br />
      <CounterUsingUseState/>
      <br />
      <ObjectWithUseState/>
      <br />
      <ToDoUsingUseState/>
      <br />
      <FormUsingUseState/>
      <br />
      <WorkingWithUseEffect/>
      <br />
      <APICallingUsingUseEffectPromise/>
      <br />
      <APICallingUsingUseEffectAsysincAwait/>
      
      <br />
        </div>
    );
};

export default HomePage;