const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnpe99vNHWPGBBMVGLBnbTDFV8k2gMNyK82pcCLxYJRmfgiwZ59_fkgyPMcEFRh1-TkOuRUYWjXncg/pub?gid=0&single=true&output=csv";

export const FUNDING_GOAL = 6500;

function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let cur: string[] = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cell += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      cur.push(cell);
      cell = "";
    } else if (c === "\n" || c === "\r") {
      if (cell !== "" || cur.length) {
        cur.push(cell);
        rows.push(cur);
        cur = [];
        cell = "";
      }
      if (c === "\r" && text[i + 1] === "\n") i++;
    } else {
      cell += c;
    }
  }
  if (cell !== "" || cur.length) {
    cur.push(cell);
    rows.push(cur);
  }
  return rows;
}

function parseAmount(s: string | undefined): number {
  if (!s) return 0;
  const cleaned = s.replace(/[$,\s]/g, "");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export type Donor = { name: string; amount: number };
export type DonationData = { raised: number; donors: Donor[] };

export async function getDonationTotals(): Promise<DonationData> {
  try {
    const res = await fetch(SHEET_URL, { next: { revalidate: 300 } });
    if (!res.ok) return { raised: 0, donors: [] };
    const text = await res.text();
    const rows = parseCSV(text);
    let raised = 0;
    const donors: Donor[] = [];
    for (let i = 1; i < rows.length; i++) {
      const name = (rows[i][1] ?? "").trim();
      const amount = parseAmount(rows[i][2]);
      if (amount > 0 && name) {
        raised += amount;
        donors.push({ name, amount });
      }
    }
    return { raised, donors };
  } catch {
    return { raised: 0, donors: [] };
  }
}
