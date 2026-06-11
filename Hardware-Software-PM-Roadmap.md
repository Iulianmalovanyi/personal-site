# Roadmap: From Software PM to Hardware-Enabled Product Leader

**Prepared for:** Iulian Malovanyi
**Target profile:** Product Manager / Technical Product Manager in connected-hardware businesses
**Time budget:** 6–10 hrs/week → core program ≈ 5–6 months
**Target markets:** Ukraine + EU
**Anchor archetype:** Connected physical product (Modern Expo / Ajax Systems class — hardware + embedded + connectivity + cloud + software + operations)

---

## Study overview — the topics, in order

A high-level map of what to study, in sequence. The focus is understanding **how things work together**, not engineering depth. Each topic below may become one lesson or several grouped under it.

1. **How a connected product fits together** — the system map: hardware, firmware/embedded, connectivity, cloud, and apps as one whole. Start here.
2. **Electronics, the basics** — just enough: microcontrollers, sensors, actuators, and how software controls physical things.
3. **Embedded systems & firmware** — what runs on the device, why it's constrained, why firmware changes are slow and careful.
4. **Connectivity & IoT** — how devices talk (Wi-Fi / Bluetooth / cellular), how data reaches the cloud, what an IoT product is end to end.
5. **Robotics, high level** — what robotics adds on top of IoT: sensing, actuation, control. Enough to talk to robotics teams.
6. **The hardware product lifecycle** — idea → design → prototype → manufacturing → shipping → support, and the gates along the way.
7. **Manufacturing, quality & operations** — BOM/cost, supply chain, yield, certification: the realities that make hardware different from software.
8. **Lean & Six Sigma** — process/quality methodologies; the operations side (Six Sigma) vs the product side (Lean Startup); what's worth certifying.
9. **How hardware PM differs from software PM** — the mindset shift: irreversibility, lead times, certification gates, field quality.
10. **Terminology & interview readiness** — the vocabulary to speak each team's language, and how to tell your story for hardware/IoT PM roles.

The detailed material for each topic follows in the sections below; the Learning Hub is organised around these ten topics.

---

## 1. Where you're actually starting from

Read your CV honestly, this is the real picture — not "no hardware experience."

**Transferable strengths (these carry over almost completely):**
- Full product lifecycle ownership on a complex, high-stakes, *regulated* product (NHS cancer decision support, EHR-integrated, 20k+ clinicians). Regulated-product instincts are rare and directly relevant to hardware, which is also gated by certification and safety.
- QA / test-strategy / quality-engineering foundation. This is a genuine edge: hardware lives and dies by verification, validation, and reliability. You already think in test plans and defect management — that maps straight onto EVT/DVT/PVT and field-quality work (defined later).
- Stakeholder management across clinical, engineering, design, sales. Hardware adds more disciplines (EE, ME, firmware, ops, manufacturing), but the coordination muscle is the same and harder to learn than the engineering.
- Requirements discovery, documentation, change management. Hardware change management is *stricter* (you can't hotfix a circuit board), so your discipline here is an asset, not a reset.

**Real gaps (what the deep-tech interview was pointing at):**
1. No intuition for how electronics and embedded systems physically work. (Fixable — this is the Arduino track.)
2. No mental model of the hardware product lifecycle and its constraints (lead times, tooling, BOM, certification). (Fixable — conceptual.)
3. No vocabulary to hold your own with EE / ME / firmware / manufacturing teams. (Fixable — terminology + the hands-on work.)
4. No portfolio signal that you've worked anywhere near physical product. (Fixable — the capstone project + how you reframe your CV.)

**The honest framing for interviews:** you are not pivoting from zero. You are a regulated-product PM adding a hardware literacy layer. That story is far stronger than "career changer," and it's true.

---

## 2. Strategic positioning: which targets, and why

Your listed interests cluster into three tiers by *probability of landing in 1–3 years*, given your background:

**Tier 1 — Highest probability (lean here first):**
- **Connected IoT / smart-device companies** (parcel lockers, retail automation, smart-building, security/sensing). Modern Expo and Ajax Systems are the archetype. The stack is exactly the transferable core below, regulation is moderate (CE/RED, not medical-grade), and your software-platform + operations experience is directly usable. Strong Ukraine + EU presence.
- **Medical devices / health-tech hardware** — your CV is the moat here. It's Tier 1 *only if* you're willing to add the regulated-device layer (Section 8). If you are, this is your single shortest jump.

**Tier 2 — Realistic with the roadmap done:**
- **Industrial automation / connected machinery.** Domain-heavier; your QA/reliability instincts help. Achievable after the capstone.
- **Robotics / automated machinery.** Add motion/control concepts; the locker and industrial work overlaps a lot with this.

**Tier 3 — Possible but steepest climb:**
- **Drones / unmanned systems & deep-tech.** Ukraine has a large and active UAV/unmanned-systems sector, so demand is real — but it carries extra safety/regulatory and domain weight (flight, RF, sometimes defence constraints). Treat as a stretch target you grow into, not a first landing.

**My opinionated take:** build the transferable connected-product foundation (it serves all of the above), land in Tier 1, and let the *first hardware job* — not more study — qualify you for Tier 2/3. You don't need to pre-learn drones. You need one connected-product PM role on your CV; everything else opens after that.

---

## 3. The mental model you're really buying: how a modern connected product fits together

This is the most important conceptual section — internalize it before the hands-on work, because it's the frame everything else hangs on. (This covers requirement #9 from your prompt.)

A connected product is a **stack of layers, each owned by a different team, each with different change-cost and cadence:**

```
[ User-facing app: mobile / web ]      ← fast iteration, software cadence (days/weeks)
            ↕  (API)
[ Cloud / backend / device management ] ← OTA, fleet mgmt, data, analytics
            ↕  (connectivity: Wi-Fi / BLE / cellular / LoRa, via protocols like MQTT)
[ Firmware / embedded software ]        ← runs ON the device, slower cadence, OTA-updatable
            ↕  (runs on)
[ Electronics: MCU, sensors, actuators, PCB, power ] ← physical, change = redesign + cost
            ↕
[ Mechanical / enclosure / industrial design ]       ← slowest, tooling locks it in
```

**The single insight that makes you credible:** *change cost increases as you go down the stack, and cadence slows.* The app team can ship Friday. The firmware team ships carefully because a bad OTA can brick thousands of field units. The electronics team can't change at all after the PCB is fabricated without a respin (weeks + money). The mechanical team is frozen once tooling is cut (months + serious money). **A good hardware PM sequences decisions so the expensive, slow layers are de-risked first.** This is the opposite reflex from pure-software PM, where you defer and iterate.

Key flows to be able to draw on a whiteboard in an interview:
- A locker accepts a parcel → sensor detects → MCU/firmware logs event → device sends event over cellular/MQTT → cloud updates state → user gets a push notification + code → courier app reflects it. Be able to narrate every hop and which team owns it.
- An OTA firmware update: cloud pushes new firmware → device validates and flashes → reports success/rollback. Know why staged rollouts and rollback matter (because you can't recall physical units).

---

## 4. The hardware product lifecycle (idea → manufacturing → post-production)

(Covers requirement #10.) Learn these stage gates by name — they're interview table-stakes:

| Stage | What happens | PM's job | Gate / risk |
|---|---|---|---|
| **Concept / discovery** | Problem, market, rough specs, feasibility | Define requirements, business case, COGS target | Wrong problem, impossible cost target |
| **Industrial / mechanical design** | Form, enclosure, ergonomics | Balance design vs manufacturability | Beautiful but un-manufacturable |
| **Engineering design** | Electronics (schematic→PCB), firmware, mechanical | Manage cross-discipline dependencies, lock requirements | Scope creep is brutal here |
| **EVT** (Engineering Validation Test) | First working prototypes, "does it work?" | Triage what's broken, hold the spec | Fundamental design flaws surface |
| **DVT** (Design Validation Test) | Near-final design, "does it meet spec + pass certs?" | Drive certification (CE/RED/EMC), reliability testing | Cert failures = schedule slip |
| **PVT** (Production Validation Test) | Manufacturing line proven at small volume | Validate yield, quality, assembly | Low yield = margin death |
| **MP / ramp** (Mass Production) | Volume manufacturing | Forecasting, supply chain, quality monitoring | Component shortages, yield drops |
| **Sustaining** | In-market: firmware OTA, RMA, revisions | Field quality, OTA roadmap, cost-down | Field failures = recalls |
| **EOL** (End of Life) | Wind-down, last-time-buy | Migration, spares, support | Stranded customers |

**Concepts inside this you must understand (not memorize deeply):** BOM (bill of materials) and BOM cost, NRE (non-recurring engineering, i.e. one-time tooling/setup cost), tooling and MOQ (minimum order quantity), DFM (design for manufacturing), yield, RMA (return merchandise authorization), lead time, NPI (new product introduction). Section 9 glossary has the full list.

---

## 5. How hardware PM differs from software PM — your highest-value section

(Covers requirement #11. This is where your software instincts will actively mislead you, so it's worth real attention.)

1. **Change is expensive and often irreversible.** No hotfix for a fabricated PCB or cut tooling. Decisions lock early and hard. → You front-load de-risking instead of deferring.
2. **Lead times dominate the schedule.** Components, PCB fab, tooling, certification each take weeks-to-months and run in series with hard dependencies. You can't sprint your way out.
3. **Upfront capital is real.** Tooling and NRE cost money before a single unit ships; MOQs force volume commitments. Your roadmap has a cash-flow shape, not just an effort shape.
4. **The critical path is physical and cross-disciplinary.** EE, ME, firmware, industrial design, ops, quality, and regulatory all gate each other. Coordination *is* the job — which is your strength.
5. **Certification is a non-negotiable gate.** You literally cannot sell in the EU without CE/RED conformity. Testing takes weeks and can fail. It sits on the critical path.
6. **COGS / BOM cost is a permanent constraint.** Every cent of unit cost is forever. "Cost-down" is an ongoing product activity, not a one-off.
7. **Quality and reliability carry physical-world stakes.** A field failure can mean RMA waves, recalls, or safety liability — much higher consequence than a reverted deploy. (Your QA background is gold here.)
8. **Versioning splits.** Firmware updates over the air (OTA); electronics/mechanical don't — they become hardware "revs" (rev A/B/C) and field units stay as-built. You manage a fleet of mixed hardware versions running updatable software.
9. **Cadence is layered.** Hardware refresh cycles run 1–3 years; the software/cloud layer iterates weekly on top. You run two clocks at once.

If you can speak fluently to points 1, 5, 7, and 8 in an interview, you'll read as someone who *gets* hardware even before your portfolio proves it.

---

## 6. The learning roadmap (phased, ~8 hrs/week)

Principle throughout: **conceptual understanding + enough hands-on to have real intuition.** You are not becoming an engineer. Depth ratings: 🟢 = working fluency needed · 🟡 = conceptual understanding · 🔴 = awareness only (know it exists, can ask smart questions).

### Phase 1 — Electronics & Arduino foundations (≈4 weeks)
**Goal:** stop being mystified by circuits; build physical intuition.

- 🟢 Voltage, current, resistance, Ohm's law, power. Why they matter: every hardware trade-off (battery life, heat, cost) traces back to these.
- 🟢 Digital vs analog signals; GPIO pins; what a microcontroller (MCU) is and does.
- 🟡 Sensors (input) vs actuators (output) — the core of any physical product.
- 🟡 Reading a simple schematic. You won't design one; you must be able to *read* one in a review.
- 🔴 Component-level detail (transistor physics, op-amps). Awareness only — skip the depth.

**Arduino exercises (do these, don't just read):**
1. Blink an LED, then control it with a button. (GPIO, digital I/O.)
2. Read a potentiometer and dim an LED (PWM). (Analog in, analog-ish out.)
3. Read a temperature/humidity sensor (e.g. DHT22) and print to serial. (Sensor → MCU → data.)
4. Drive a servo and a relay. (Actuators; the relay teaches you why driving real loads ≠ blinking an LED.)

**Resources:** Arduino official docs + Project Hub (free, authoritative); *Getting Started with Arduino* (Massimo Banzi, Arduino's co-founder) for the gentle on-ramp; *Make: Electronics* (Charles Platt) for hands-on electronics intuition; YouTube — Paul McWhorter's Arduino series (slow, complete, beginner-perfect) and GreatScott! (short, intuition-building).

### Phase 2 — Embedded/firmware + connectivity (≈5 weeks)
**Goal:** understand what firmware engineers actually wrestle with, and how devices talk.

- 🟢 Firmware vs embedded software vs application software — what runs where, and why firmware is constrained (limited memory, no OS or an RTOS, must be robust).
- 🟡 The main loop, interrupts, timing/real-time constraints, RTOS (e.g. FreeRTOS/Zephyr — names only). Why it matters: explains why firmware estimates and changes are conservative.
- 🟢 Connectivity options and their trade-offs — this is core PM knowledge:
  - **BLE** (short range, low power), **Wi-Fi** (local, power-hungry), **cellular LTE-M/NB-IoT** (wide-area, recurring SIM cost), **LoRa/LoRaWAN** (long range, tiny data, great for sensors). Be able to argue which fits a use case.
- 🟢 **MQTT** (the dominant lightweight IoT messaging protocol) conceptually — publish/subscribe, why it suits constrained devices.
- 🟢 **OTA updates** — what they are, why staged rollout + rollback matter. (You already get this from software releases; map it onto physical fleets.)
- 🟡 Power management & battery life basics — a constant product constraint.

**Arduino exercises (move to an ESP32 board — it has Wi-Fi/BLE built in, ~$5–10):**
5. Connect the ESP32 to Wi-Fi and serve a tiny web page showing sensor data.
6. Publish sensor readings to a free MQTT broker (e.g. HiveMQ public broker) and watch them arrive.
7. Control an actuator remotely by subscribing to an MQTT topic.

**Resources:** Andreas Spiess on YouTube (the definitive ESP32/IoT channel — "the guy with the Swiss accent"); DroneBot Workshop (clear IoT/robotics builds); *Making Embedded Systems* (Elecia White) — read selectively for the firmware-constraints mindset, skip the deep C. Coursera UC Irvine "Introduction to the Internet of Things and Embedded Systems" for structured conceptual coverage (verify it's still offered).

### Phase 3 — Full connected product + capstone (≈5 weeks)
**Goal:** experience the whole stack end to end, and produce a portfolio artifact.

- 🟢 How device → connectivity → cloud → app actually connects (Section 3 made real).
- 🟡 Device management / fleet concepts: provisioning, identity, monitoring, OTA at scale.
- 🟡 Cloud-side basics: a managed IoT platform (AWS IoT Core, or a hobby platform like Blynk/ThingsBoard) — conceptual, you're not becoming a cloud engineer.

**Capstone project (this becomes your interview story):**
> Build a miniature "connected locker" or "connected monitor": an ESP32 + sensor + actuator that reports status to the cloud, sends you a notification on an event, and accepts a remote command — with a basic dashboard. Then **write it up like a PM**: the requirements, the trade-offs you faced (which connectivity? why? power vs cost?), what you'd do differently at scale, and what the manufacturing/certification implications would be.

The *write-up* matters more than the build. It proves you can think about a physical product like a PM, which is exactly what you're selling.

**Resources:** Random Nerd Tutorials (excellent free ESP32-to-cloud walkthroughs); the chosen platform's own getting-started docs.

### Phase 4 — Lifecycle, manufacturing, quality, certification (≈4 weeks, mostly reading)
**Goal:** the business-and-operations literacy that separates a TPM from a hobbyist.

- 🟢 Hardware lifecycle stage gates (Section 4) — by name and meaning.
- 🟢 BOM/COGS, NRE, tooling, MOQ, DFM, yield, RMA, lead time, NPI (Section 9).
- 🟢 Certification landscape for EU: **CE marking, RED** (Radio Equipment Directive, for anything with a radio), **EMC**, **RoHS/REACH** (materials). Know what they gate and that they take weeks.
- 🟡 Supply chain & forecasting basics; why component shortages are a product risk.
- 🔴 Detailed manufacturing process engineering — awareness only.

**Resources:** *The Hardware Startup: Building Your Product, Business, and Brand* (DiResta, Forrest, Vinyard, O'Reilly) — the best single business-of-hardware overview for your purpose; EEVblog on YouTube for design/manufacturing reality checks.

### Phase 5 — PM fluency & interview prep (≈3–4 weeks, overlap with Phase 4)
- Internalize Section 5 (hardware vs software PM differences).
- Drill the terminology glossary (Section 9) until it's automatic.
- Work the interview prep (Section 10).
- Reframe your CV (Section 7).

---

## 7. What to skip (so you don't waste the 6–10 hours)

Be ruthless here — these are commonly taught but low-value *for your goals*:
- ❌ **Deep C/C++ programming.** You're not writing production firmware. Enough to read and tinker, no more.
- ❌ **Circuit design / PCB layout from scratch.** Reading schematics: yes. Designing them: no.
- ❌ **Transistor/op-amp/analog theory in depth.** Awareness only.
- ❌ **Control theory / advanced robotics math.** Only if you commit to robotics later.
- ❌ **A full embedded-systems university course.** Too engineer-oriented; you'll drown in irrelevant depth.
- ❌ **Soldering mastery, oscilloscope proficiency.** Nice party trick, near-zero PM payoff.

If a resource has you debugging C pointers or calculating filter coefficients, you've gone too deep — back out.

---

## 8. The optional medical-device specialization layer

If you decide to lean on your CV and target health-tech hardware, add this layer *on top* of the roadmap (don't replace anything):
- **EU MDR** (Medical Device Regulation 2017/745) — the gating framework. 🟢 conceptual.
- **ISO 13485** (quality management for medical devices), **IEC 62304** (medical device software lifecycle — close to your QA world), **ISO 14971** (risk management), **IEC 60601** (medical electrical safety). 🟡 know what each governs.
- The concept of **SaMD** (Software as a Medical Device) and software-vs-device classification.

You already operate near this world. For anyone else it's a barrier; for you it's leverage. **Caveat: I'm flagging these as the right things to learn, but regulatory classification is consequential and changes — verify specifics with a regulatory/QA specialist before relying on them in any real decision.**

---

## 9. Terminology glossary by discipline

(Covers requirement #8. Learn these cold — fluency here is most of "speaking the same language.")

**Electronics / EE:** PCB (printed circuit board), PCBA (assembled board), schematic, MCU (microcontroller), SoC (system on chip), GPIO, ADC/DAC (analog-digital converters), PWM, datasheet, BOM, rev (revision, e.g. "rev B").

**Firmware / embedded:** firmware, bootloader, flash, RTOS, bare-metal, interrupt, watchdog, OTA, brick (a device rendered non-functional), debug/JTAG.

**Mechanical / industrial design:** enclosure, tooling, injection molding, CAD, tolerance, DFM (design for manufacturing), DFA (design for assembly).

**Connectivity:** BLE, Wi-Fi, cellular (LTE-M, NB-IoT), LoRa/LoRaWAN, Zigbee, MQTT, gateway, provisioning, fleet.

**Manufacturing / ops:** NRE (non-recurring engineering), MOQ (minimum order quantity), yield, EVT/DVT/PVT, NPI (new product introduction), ramp, lead time, COGS, RMA (return merchandise authorization), CM (contract manufacturer), last-time-buy, EOL.

**Quality / regulatory:** V&V (verification & validation), reliability testing, CE, RED, EMC, RoHS, REACH, recall. (Medical adds: MDR, ISO 13485, IEC 62304, ISO 14971.)

---

## 10. Interview preparation

(Covers requirement #12.) Expect three categories of question:

**A. "Do you understand hardware?" (the gap they're probing)**
- Walk me through how a connected device sends data to the cloud. → Use Section 3.
- Why is changing hardware so much costlier than changing software? → Section 5, point 1.
- How would you choose between Wi-Fi, BLE, and cellular for [device]? → Phase 2 connectivity trade-offs.
- What's the difference between firmware and the app? → Phase 2.
- What is OTA and why does staged rollout matter? → Phase 2.

**B. "Can you PM a hardware product?" (where you should shine)**
- How does managing a hardware roadmap differ from software? → Section 5, your strongest answer.
- How would you de-risk a product before tooling is cut? → front-load the expensive/slow layers.
- A field unit is failing in the wild — walk me through your response. → RMA, root cause, firmware OTA vs hardware rev, recall decision. (Lean on your QA background.)
- How do you balance BOM cost against features? → COGS as a permanent constraint.

**C. Your CV, reframed (rehearse these out loud):**
- The cancer-decision-support story: regulated, safety-critical, cross-disciplinary, EHR-integrated at scale. Position it as evidence you can handle gated, high-stakes, multi-team products — which hardware is.
- The QA/test-strategy story: position it as why you'll be strong on V&V, reliability, and field quality.
- The honest pivot narrative: "I'm a regulated-product PM adding hardware literacy — here's the connected device I built and what I learned about the trade-offs." The capstone makes this concrete.

**Resume edit to make now:** add a "Hardware / IoT" line under skills once Phase 3 is done, and a one-line capstone project entry. A small, real, well-articulated project beats a list of courses.

---

## 11. Suggested cadence at a glance

| Weeks | Focus | Output | Certificate milestone |
|---|---|---|---|
| 1–4 | Phase 1: electronics + Arduino basics | 4 working circuits | (Coursera IoT spec running alongside) |
| 5–9 | Phase 2: embedded + connectivity (ESP32) | Device talking to cloud via MQTT | **Sit the official Arduino Certification (~week 9)** |
| 10–14 | Phase 3: full stack + capstone | Connected-device project + PM write-up | Finish Coursera IoT spec → certificate |
| 12–18 | Phase 4: lifecycle, manufacturing, certs | Lifecycle fluency | — |
| 16–20 | Phase 5: PM framing + interview prep | Rehearsed answers, reframed CV | Add both to CV |

By ~month 5 you should be interviewing for Tier 1 roles. Don't wait for "ready" — start applying around week 14 once the capstone exists; interviews are part of the learning.

---

## 12. Certification path

**Reality check first:** certificates are a weak hiring signal for hardware PM roles. Your capstone project and reframed CV (Sections 6, 10) outrank any of these. Use certificates as a forcing function to finish a course and as a small CV line — not as the thing that gets you hired. Don't overspend.

Ranked by credibility-per-cost for your situation:

1. **Official Arduino Certification — do this one.** Vendor-official online exam (36 questions, 75 minutes, immediate results), based directly on Arduino Starter Kit content, which you already own. Available in several languages including German and Italian. One-time paid exam — buy *exam access only* (skip the kit+exam bundle since you have the kit). Sit it around week 9, after Phase 2. This is the certificate worth putting on your CV.

2. **Coursera — UC Irvine "An Introduction to Programming the Internet of Things (IoT)" specialization.** Covers embedded systems, Arduino, and Raspberry Pi, and ends in a microcontroller capstone — which can double as your Section 6 portfolio capstone (one piece of work, two payoffs). University-branded certificate. Cost model: audit free, pay for the certificate, or apply for financial aid (approved aid = free certificate). Run it alongside Phases 1–3.

3. **Udemy — for learning, not credentialing.** Cheap in frequent sales (~€10–15, verify). Completion certificates are discounted by interviewers; use these courses to learn structure, not to certify.

**Skip:** heavier engineer-targeted specializations (e.g. CU Boulder Industrial IoT) — they assume a BSEE and C/C++ and go deeper than your goal warrants.

### 12b. Lean (when job descriptions ask for it)

"Lean" in hardware/product JDs means two different things, and they certify very differently. JDs often list **both**.

**Lean Six Sigma / operations — this one is certifiable, get a belt.** It's an open methodology with no single authority; recognised bodies are **ASQ** (gold standard, requires a verified real project for Green/Black Belt), **IASSC** (exam-based, valid for life, no project), and **CSSC** (accessible, free self-study guide, pay only for the exam). Belt levels: White (awareness, weak), **Yellow** (foundational — fast, cheap, enough to clear the "Lean" keyword/ATS filter), **Green** (leads DMAIC projects; ~$295–350; the level that carries real weight — and your QA Lead experience legitimately backs it), Black (overkill for a PM). **Recommendation:** Green Belt if you'll back it with real process work; Yellow Belt if you just need the box ticked fast. For the EU/Ukraine market, prefer an internationally recognised body (IASSC or ASQ) over an obscure provider. Free/cheap routes: CSSC (free study guide + paid exam), GoLeanSixSigma free White/Yellow, Alison free Yellow (low credibility), or a Udemy course with a free external accredited exam.

**Lean Startup / Lean product — do NOT pay to certify this.** There is no respected, industry-recognised certificate; provider badges like "Lean Startup Certified Associate" are low-value and can read as box-buying. For this flavour, employers want *demonstrated practice*, which you already have. Cover it with CV/LinkedIn phrasing instead, e.g.:
- "Ran hypothesis-driven discovery and build-measure-learn cycles; validated capabilities via MVPs before committing to full build."
- "Made pivot-or-persevere roadmap decisions based on data analysis, clinical feedback, and real-world usage."
- "Applied lean product principles to prioritise high-value increments under delivery and regulatory constraints."

**Net:** one paid certificate (a Six Sigma belt) covers the operations side; the product side is covered by CV phrasing + your existing experience, not a badge.

---

*Resource caveat repeated: all named resources are ones I'm confident exist, but verify current editions, pricing, and availability before committing. Treat anything regulatory as needing specialist confirmation.*
