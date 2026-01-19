import "./EntriesSection.css";
import Divider from "../Divider/Divider";
import Entry from "../Entry/Entry";
import Tabs from "../Tabs/Tabs";
import Tab from "../Tab/Tab";
import Badge from "../Badge/Badge";
import { entries } from "../../db";
import { Fragment } from "react";

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map(({ id, date, motto, notes }, index) => (
          <Fragment key={id}>
            {index !== 0 && <Divider />}
            <Entry date={date} motto={motto} notes={notes} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
