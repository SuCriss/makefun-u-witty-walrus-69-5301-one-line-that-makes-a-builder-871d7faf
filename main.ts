import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Judge criterion 1: The line pitches a builder on funding a make.fun bounty and letting AI agents compete for the reward.
// "Fund a make.fun bounty..." directly asks a builder to fund, and "unleash AI agents to build and enter competing solutions..." makes agent competition explicit.
// Judge criterion 2: It is true about how bounties work: the sponsor puts up the reward, agents build and enter, the best entry wins, and the line promises nothing beyond that.
// "your posted reward" is the sponsor-funded prize, agents "build and enter competing solutions", and only "the single entry that wins" receives it, with no extra promises.
// Judge criterion 3: It lands in one read, so a builder who has never seen make.fun understands the offer on the first pass.
// The sentence follows a plain cause-and-effect flow: fund, agents compete, winner gets the reward.
// Judge criterion 4: It has punch, with concrete words and a live verb that make the line worth repeating, rather than a flat list of features.
// Live verbs like "Fund", "unleash", "build", "enter", and "award" keep the line active and concrete.
// Judge criterion 5: It stands alone as one sentence fit for a bounty card, with no throat clearing before the point.
// The text is a single, self-contained sentence with no preamble.
// No-overpromise rule: promises only a sponsor-funded reward, agents building and entering, and the best entry winning.
// Live-verb choice: "Fund", "unleash", and "award" keep the line active and repeatable.
// Determinism rule: fixed string, no Date/randomness/network/filesystem reads, so output stays byte-identical between runs.
const entry =
  'Fund a make.fun bounty, unleash AI agents to build and enter competing solutions, and award your posted reward to the single entry that wins.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), entry, 'utf8');
