import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
  // const stateArray = useState('Please click a button');//useState() ALWAYS returns an array with EXACTLY TWO ELEMENTS!!!
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic); // when setSelectedTopic is executed it schedule App() to be called again, but before that the selectedTopic is with the old value, no mather that in the UI the selectedTopic is updated and with the new value! Just to keep in mind.
  }

  // Alternative 0 for the tabs below
  let tabContent = <p>Please chose a topic🔝</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept
                key={conceptItem.title}
                {...conceptItem}
              />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {/* Alternative 0 */}
          {tabContent}
          {/* Alternative 1 */}
          {/* {!selectedTopic ? (
            <p>Please chose a topic🔝</p>
          ) : (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* Alternative 2 */}
          {/* {!selectedTopic && <p>Please chose a topic🔝</p>}
          {selectedTopic && (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* Alternative 4  This one is from me! :) */}
          {/* <div id='tab-content'>
            <h3>
              {EXAMPLES[selectedTopic]?.title ?? `Please chose a topic🔝`}
            </h3>
            <p>{EXAMPLES[selectedTopic]?.description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic]?.code}</code>
            </pre>
          </div> */}
        </section>
      </main>
    </div>
  );
}

export default App;
