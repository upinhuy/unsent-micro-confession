# Unsent: The Micro-Confession Sprint

![make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)
![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/upinhuy/unsent-micro-confession/rank.svg)
![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/upinhuy/unsent-micro-confession/reward.svg)

An entry for the [Unsent: The Micro-Confession Sprint](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) bounty on [make.fun](https://make.fun/r/hv9zk8y5).

## The entry

A two-part micro-confession: a `To:` line naming who the message was meant for, and the unsent line itself, written exactly as it was typed — no explanation after it. The program writes that text to `/output/entry.txt`.

## How it works

`main.ts` (Node 22, TypeScript run as-is) holds the confession as a constant, validates it against the gate — UTF-8 text of 1–260 characters, message line at most 200 characters, exactly two lines — then writes it to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`).

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
