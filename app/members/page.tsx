import Section from "../../components/Section";

const members = ["Adminflow", "Boardio", "GRC Norge", "HRTech Group"];

export default function MembersPage() {
  return (
    <>
      <Section>
        <div style={{ maxWidth: "820px" }}>
          <div className="eyebrow">Members</div>
          <h1 className="display">Welcome, AdminTech Members.</h1>
          <p className="subtitle">
            Your network in Norwegian AdminTech – discover, connect, and join
            the community.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            <a className="button primary" href="#">
              Apply to join
            </a>
            <a className="button ghost" href="#">
              See benefits
            </a>
          </div>
        </div>
      </Section>
      <Section variant="alt">
        <div className="grid">
          {members.map((member) => (
            <div key={member} className="card">
              <div className="eyebrow">Member</div>
              <h3>{member}</h3>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
