# Sistema de Progressão de XP, Nível e Rank

## Estados Principais em usePlayerProgression.ts

```ts
level: number        // nível atual do jogador
currentXp: number    // XP atual dentro do nível
```

### Regras Importantes

* XP pode ultrapassar o necessário para o próximo nível
* Um ganho de XP pode dar muitos níveis
* Rank é derivado do nível

---

#### getXpToNextLevel
* XP necessário para o próximo nível = level * 10

---

#### applyLevelUp
```ts
let newLevel = level
let xp = currentXp
```
---

#### getRankByLevel
```ts
  if (level >= 100) return "Lenda Suprema";
  if (level >= 90) return "Lenda de Elite";
  if (level >= 80) return "Lenda";
  if (level >= 70) return "Semi-Lenda";
  if (level >= 60) return "Elite";
  if (level >= 50) return "Semi-Elite";
  if (level >= 40) return "Veterano";
  if (level >= 30) return "Semi-Veterano";
  if (level >= 20) return "Em Ascensão";
  if (level >= 10) return "Iniciante";

  return "Frango";
```