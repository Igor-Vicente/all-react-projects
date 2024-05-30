import { Accordion } from "./components/accordion/Accordion";
import { SearchableList } from "./components/searchableList/SearchableList";
import { Place } from "./components/Place";
import { PLACES } from "./constants";

export function App() {
  return (
    <main>
      <section>
        <h2>Why work wiht us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident consequatur repellat debitis sunt amet quaerat
                  saepe.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="work" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We are working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident consequatur repellat debitis sunt amet quaerat
                  saepe.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList
          items={["one", "two", "three"]}
          itemKeyFn={(item) => item}
        >
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}
