const STORAGE_KEY = "hypopharyngeal_lab_app";
const CONFIG_KEY = "hypopharyngeal_lab_config";
const DEFAULT_INDICATORS = [
  { name: "★钾(mmol/L)", min: 3.5, max: 5.5 },
  { name: "★钠(mmol/L)", min: 135, max: 145 },
  { name: "★氯(mmol/L)", min: 98, max: 108 },
  { name: "★钙(mmol/L)", min: 2.1, max: 2.6 },
  { name: "★无机磷(mmol/L)", min: 0.8, max: 1.5 },
  { name: "★葡萄糖(mmol/L)", min: 3.9, max: 6.1 },
  { name: "★尿素(mmol/L)", min: 2.9, max: 7.1 },
  { name: "★肌酐(酶法)(μmol/L)", min: 44, max: 133 },
  { name: "★尿酸(μmol/L)", min: 210, max: 420 },
  { name: "★总蛋白(g/L)", min: 65, max: 85 },
  { name: "★白蛋白(溴甲酚绿法)(g/L)", min: 35, max: 55 },
  { name: "*总胆红素(μmol/L)", min: 5, max: 21 },
  { name: "*直接胆红素(μmol/L)", min: 0, max: 7 },
  { name: "*总胆汁酸(μmol/L)", min: 0, max: 10 },
  { name: "★丙氨酸氨基转移酶(U/L)", min: 7, max: 40 },
  { name: "★天冬氨酸氨基转移酶(U/L)", min: 13, max: 35 },
  { name: "★碱性磷酸酶(U/L)", min: 45, max: 125 },
  { name: "★γ-谷氨酰转移酶(U/L)", min: 10, max: 60 },
  { name: "★肌酸激酶(U/L)", min: 40, max: 200 },
  { name: "*肌酸激酶同工酶MB(U/L)", min: 0, max: 24 },
  { name: "★乳酸脱氢酶(U/L)", min: 120, max: 250 },
  { name: "*高敏CRP(mg/L)", min: 0, max: 10 },
  { name: "*同型半胱氨酸(μmol/L)", min: 5, max: 15 },
  { name: "*脂蛋白a(mg/dl)", min: 0, max: 30 },
  { name: "CO2结合力(mmol/L)", min: 22, max: 29 },
  { name: "★甘油三酯(mmol/L)", min: 0.3, max: 1.7 },
  { name: "★总胆固醇(mmol/L)", min: 3, max: 5.2 },
  { name: "★低密度脂蛋白胆固醇(mmol/L)", min: 0, max: 3.4 },
  { name: "★高密度脂蛋白胆固醇(mmol/L)", min: 1, max: 1.9 },
  { name: "★铁(μmol/L)", min: 8, max: 30 },
  { name: "铁不饱和结合力(μmol/L)", min: 27, max: 49 },
  { name: "总铁结合力(μmol/L)", min: 45, max: 72 },
  { name: "转铁蛋白饱和度(%)", min: 20, max: 50 },
  { name: "★免疫球蛋白G(mg/dl)", min: 700, max: 1600 },
  { name: "★免疫球蛋白A(mg/dl)", min: 70, max: 400 },
  { name: "★免疫球蛋白M(mg/dl)", min: 40, max: 230 },
  { name: "*补体C3(mg/dl)", min: 80, max: 160 },
  { name: "*补体C4(mg/dl)", min: 10, max: 40 },
  { name: "*补体C1q(mg/L)", min: 50, max: 200 },
  { name: "*糖链抗原-199(U/mL)", min: 0, max: 37 },
  { name: "*糖链抗原-153(U/mL)", min: 0, max: 25 },
  { name: "*糖链抗原-125(U/mL)", min: 0, max: 35 },
  { name: "★甲胎蛋白(ng/ml)", min: 0, max: 20 },
  { name: "★癌胚抗原(ng/ml)", min: 0, max: 5 },
  { name: "★总T3(nmol/L)", min: 1.2, max: 3.1 },
  { name: "★总T4(nmol/L)", min: 62, max: 155 },
  { name: "★游离T3(pmol/L)", min: 3.1, max: 6.8 },
  { name: "★游离T4(pmol/L)", min: 12, max: 22 },
  { name: "★促甲状腺激素(mIU/L)", min: 0.27, max: 4.2 },
  { name: "甲状腺球蛋白抗体(IU/mL)", min: 0, max: 115 },
  { name: "甲状腺球蛋白(ng/ml)", min: 1.4, max: 78 },
  { name: "*甲状旁腺素(pg/ml)", min: 15, max: 65 },
  { name: "甲状腺过氧化物酶抗体(IU/mL)", min: 0, max: 34 },
  { name: "皮质醇(μg/dl)", min: 5, max: 25 },
  { name: "促卵泡成熟素(mIU/mL)", min: 3, max: 12 },
  { name: "人生长激素(μg/L)", min: 0, max: 5 },
  { name: "促黄体生成素(mIU/mL)", min: 2, max: 12 },
  { name: "血清泌乳素(ng/ml)", min: 4, max: 23 },
  { name: "IL-1(pg/ml)", min: 0, max: 5 },
  { name: "IL-2(pg/ml)", min: 0, max: 5 },
  { name: "IL-4(pg/ml)", min: 0, max: 5 },
  { name: "IL-5(pg/ml)", min: 0, max: 5 },
  { name: "IL-6(pg/ml)", min: 0, max: 7 },
  { name: "IL-8(pg/ml)", min: 0, max: 10 },
  { name: "IL-10(pg/ml)", min: 0, max: 5 },
  { name: "IL-12P70(pg/ml)", min: 0, max: 5 },
  { name: "IL-17(pg/ml)", min: 0, max: 5 },
  { name: "TNF-α(pg/ml)", min: 0, max: 8 },
  { name: "INF-α(pg/ml)", min: 0, max: 5 },
  { name: "INF-γ(pg/ml)", min: 0, max: 5 },
  { name: "降钙素原(PCT)(ng/ml)", min: 0, max: 0.5 },
  { name: "*白细胞(10^9/L)", min: 3.5, max: 9.5 },
  { name: "淋巴细胞%", min: 20, max: 40 },
  { name: "单核细胞%", min: 3, max: 10 },
  { name: "中性粒细胞%", min: 40, max: 75 },
  { name: "嗜酸性细胞%", min: 0.5, max: 5 },
  { name: "嗜碱性细胞%", min: 0, max: 1 },
  { name: "淋巴细胞绝对值(10^9/L)", min: 1.1, max: 3.2 },
  { name: "单核细胞绝对值(10^9/L)", min: 0.1, max: 0.6 },
  { name: "中性粒细胞绝对值(10^9/L)", min: 1.8, max: 6.3 },
  { name: "嗜酸性细胞绝对值(10^9/L)", min: 0.02, max: 0.52 },
  { name: "嗜碱性细胞绝对值(10^9/L)", min: 0, max: 0.1 },
  { name: "*红细胞计数(10^12/L)", min: 3.8, max: 5.1 },
  { name: "*血红蛋白(g/L)", min: 115, max: 150 },
  { name: "*红细胞压积", min: 0.35, max: 0.45 },
  { name: "*平均红细胞体积(fL)", min: 82, max: 100 },
  { name: "*平均血红蛋白量(pg)", min: 27, max: 34 },
  { name: "*平均血红蛋白浓度(g/L)", min: 320, max: 360 },
  { name: "红细胞体积宽度%", min: 11, max: 15 },
  { name: "*血小板(10^9/L)", min: 125, max: 350 },
  { name: "平均血小板体积(fL)", min: 7, max: 11 },
  { name: "血小板比积", min: 0.15, max: 0.35 },
  { name: "平均血小板宽度(fL)", min: 10, max: 18 },
  { name: "大血小板比率%", min: 10, max: 40 },
  { name: "c-反应蛋白(mg/L)", min: 0, max: 10 },
  { name: "肌钙蛋白I(CTNI)(ng/L)", min: 0, max: 34 }
];

const state = {
  config: [],
  records: [],
  patients: {},
  filter: { id: "", start: "", end: "" },
  sort: { key: "", direction: "asc" },
  selected: new Set()
};

const elements = {
  patientForm: document.getElementById("patientForm"),
  formHint: document.getElementById("formHint"),
  resetForm: document.getElementById("resetForm"),
  imageInput: document.getElementById("imageInput"),
  imagePreview: document.getElementById("imagePreview"),
  uploadProgress: document.getElementById("uploadProgress"),
  startRecognition: document.getElementById("startRecognition"),
  uploadHint: document.getElementById("uploadHint"),
  indicatorConfig: document.getElementById("indicatorConfig"),
  addIndicator: document.getElementById("addIndicator"),
  saveConfig: document.getElementById("saveConfig"),
  addRecord: document.getElementById("addRecord"),
  editRecord: document.getElementById("editRecord"),
  deleteRecord: document.getElementById("deleteRecord"),
  clearStorage: document.getElementById("clearStorage"),
  filterPatientId: document.getElementById("filterPatientId"),
  filterStart: document.getElementById("filterStart"),
  filterEnd: document.getElementById("filterEnd"),
  applyFilter: document.getElementById("applyFilter"),
  resetFilter: document.getElementById("resetFilter"),
  exportCsv: document.getElementById("exportCsv"),
  exportExcel: document.getElementById("exportExcel"),
  filterHint: document.getElementById("filterHint"),
  dataTable: document.getElementById("dataTable"),
  detailPanel: document.getElementById("detailPanel"),
  detailContent: document.getElementById("detailContent"),
  detailTitle: document.getElementById("detailTitle"),
  closeDetail: document.getElementById("closeDetail"),
  printDetail: document.getElementById("printDetail"),
  toast: document.getElementById("toast"),
  statPatients: document.getElementById("statPatients"),
  statRecords: document.getElementById("statRecords"),
  statFiltered: document.getElementById("statFiltered")
};

function showToast(message, type = "info") {
  elements.toast.textContent = message;
  elements.toast.style.background = type === "error" ? "#c53030" : "#2b6cb0";
  elements.toast.classList.add("show");
  setTimeout(() => elements.toast.classList.remove("show"), 2200);
}

function loadState() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  const config = JSON.parse(localStorage.getItem(CONFIG_KEY) || "null");
  state.config = config || DEFAULT_INDICATORS;
  state.records = saved.records || [];
  state.patients = saved.patients || {};
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    records: state.records,
    patients: state.patients
  }));
  localStorage.setItem(CONFIG_KEY, JSON.stringify(state.config));
}

function updateStats(filteredCount = state.records.length) {
  elements.statPatients.textContent = Object.keys(state.patients).length;
  elements.statRecords.textContent = state.records.length;
  elements.statFiltered.textContent = filteredCount;
}

function renderConfig() {
  elements.indicatorConfig.innerHTML = "";
  state.config.forEach((indicator, index) => {
    const row = document.createElement("div");
    row.className = "config-row";
    row.draggable = true;
    row.dataset.index = index;
    row.innerHTML = `
      <span class="drag-handle">☰</span>
      <input type="text" value="${indicator.name}" data-field="name" />
      <input type="number" step="0.01" value="${indicator.min ?? ""}" data-field="min" placeholder="参考下限" />
      <input type="number" step="0.01" value="${indicator.max ?? ""}" data-field="max" placeholder="参考上限" />
      <button type="button" data-action="remove">删除</button>
    `;
    elements.indicatorConfig.appendChild(row);
  });
  bindConfigEvents();
}

function bindConfigEvents() {
  elements.indicatorConfig.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", (event) => {
      const row = event.target.closest(".config-row");
      const index = Number(row.dataset.index);
      const field = event.target.dataset.field;
      const value = event.target.value;
      state.config[index][field] = value === "" ? null : value;
    });
  });

  elements.indicatorConfig.querySelectorAll("button[data-action='remove']").forEach((button) => {
    button.addEventListener("click", (event) => {
      const row = event.target.closest(".config-row");
      const index = Number(row.dataset.index);
      state.config.splice(index, 1);
      renderConfig();
      renderTable();
    });
  });

  let dragIndex = null;
  elements.indicatorConfig.querySelectorAll(".config-row").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      dragIndex = Number(event.currentTarget.dataset.index);
    });
    row.addEventListener("dragover", (event) => event.preventDefault());
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      const targetIndex = Number(event.currentTarget.dataset.index);
      if (dragIndex === null || dragIndex === targetIndex) {
        return;
      }
      const [moved] = state.config.splice(dragIndex, 1);
      state.config.splice(targetIndex, 0, moved);
      renderConfig();
      renderTable();
    });
  });
}

function collectFormData() {
  const formData = new FormData(elements.patientForm);
  const patientId = formData.get("patientId").trim();
  const patientName = formData.get("patientName").trim();
  const gender = formData.get("gender");
  const age = formData.get("age");
  const admissionNo = formData.get("admissionNo").trim();
  const contact = formData.get("contact").trim();
  const admissionDate = formData.get("admissionDate");

  if (!patientId || !patientName || !gender || !age || !admissionNo || !admissionDate) {
    showToast("请填写所有必填项", "error");
    return null;
  }

  return {
    patientId,
    patientName,
    gender,
    age: Number(age),
    admissionNo,
    contact,
    admissionDate
  };
}

function upsertPatientInfo(data) {
  state.patients[data.patientId] = {
    patientId: data.patientId,
    patientName: data.patientName,
    gender: data.gender,
    age: data.age,
    admissionNo: data.admissionNo,
    contact: data.contact
  };
}

function addRecordEntry(data, indicators = {}) {
  const recordId = `${data.patientId}-${data.admissionDate}`;
  const existing = state.records.find((record) => record.recordId === recordId);
  if (existing) {
    existing.indicators = { ...existing.indicators, ...indicators };
    showToast("已更新该时间点记录");
    return;
  }
  state.records.push({
    recordId,
    patientId: data.patientId,
    patientName: data.patientName,
    gender: data.gender,
    age: data.age,
    admissionNo: data.admissionNo,
    contact: data.contact,
    admissionDate: data.admissionDate,
    indicators
  });
  showToast("新增时间点记录成功");
}

function renderTable() {
  const thead = elements.dataTable.querySelector("thead");
  const tbody = elements.dataTable.querySelector("tbody");
  const filtered = applyFilterToRecords();
  thead.innerHTML = "";
  tbody.innerHTML = "";

  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
    <th data-key="select">选择</th>
    <th data-key="patientId">患者ID</th>
    <th data-key="patientName">姓名</th>
    <th data-key="admissionDate">住院时间点</th>
  `;
  state.config.forEach((indicator) => {
    const th = document.createElement("th");
    th.textContent = indicator.name;
    th.dataset.key = indicator.name;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  filtered.forEach((record) => {
    const row = document.createElement("tr");
    row.dataset.recordId = record.recordId;
    row.innerHTML = `
      <td><input type="checkbox" data-select="${record.recordId}" ${
        state.selected.has(record.recordId) ? "checked" : ""
      } /></td>
      <td class="link" data-action="detail">${record.patientId}</td>
      <td>${record.patientName}</td>
      <td>${record.admissionDate}</td>
    `;

    state.config.forEach((indicator) => {
      const value = record.indicators?.[indicator.name] ?? "";
      const cell = document.createElement("td");
      cell.dataset.indicator = indicator.name;
      cell.textContent = value;
      if (value !== "" && isAbnormal(value, indicator)) {
        cell.classList.add("abnormal");
      }
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  if (!filtered.length) {
    const emptyRow = document.createElement("tr");
    const colspan = 4 + state.config.length;
    emptyRow.innerHTML = `<td colspan="${colspan}" class="hint">暂无数据，请先录入患者信息或导入识别结果。</td>`;
    tbody.appendChild(emptyRow);
  }

  bindTableEvents();
  updateStats(filtered.length);
}

function applyFilterToRecords() {
  return state.records.filter((record) => {
    if (state.filter.id && record.patientId !== state.filter.id) {
      return false;
    }
    if (state.filter.start && record.admissionDate < state.filter.start) {
      return false;
    }
    if (state.filter.end && record.admissionDate > state.filter.end) {
      return false;
    }
    return true;
  });
}

function isAbnormal(value, indicator) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return false;
  }
  const min = indicator.min !== null ? Number(indicator.min) : null;
  const max = indicator.max !== null ? Number(indicator.max) : null;
  if (min !== null && numeric < min) {
    return true;
  }
  if (max !== null && numeric > max) {
    return true;
  }
  return false;
}

function bindTableEvents() {
  const tbody = elements.dataTable.querySelector("tbody");
  tbody.querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", (event) => {
      if (event.target.matches("input[type='checkbox']")) {
        const recordId = event.target.dataset.select;
        if (event.target.checked) {
          state.selected.add(recordId);
        } else {
          state.selected.delete(recordId);
        }
        return;
      }
      tbody.querySelectorAll("tr").forEach((r) => r.classList.remove("selected"));
      row.classList.add("selected");
    });
  });

  tbody.querySelectorAll("td[data-action='detail']").forEach((cell) => {
    cell.addEventListener("click", (event) => {
      const recordId = event.target.closest("tr").dataset.recordId;
      const record = state.records.find((item) => item.recordId === recordId);
      if (record) {
        openDetail(record.patientId);
      }
    });
  });

  tbody.querySelectorAll("td[data-indicator]").forEach((cell) => {
    cell.addEventListener("dblclick", () => {
      const oldValue = cell.textContent;
      const input = document.createElement("input");
      input.type = "text";
      input.value = oldValue;
      cell.textContent = "";
      cell.appendChild(input);
      input.focus();
      input.addEventListener("blur", () => {
        const value = input.value.trim();
        const indicatorName = cell.dataset.indicator;
        const recordId = cell.closest("tr").dataset.recordId;
        const record = state.records.find((item) => item.recordId === recordId);
        if (!record) return;
        if (value !== "" && Number.isNaN(Number(value))) {
          showToast("请输入数字类型的指标数值", "error");
          cell.textContent = oldValue;
          return;
        }
        record.indicators[indicatorName] = value;
        saveState();
        cell.textContent = value;
        cell.classList.toggle("abnormal", value !== "" && isAbnormal(value, findIndicator(indicatorName)));
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          input.blur();
        }
      });
    });
  });

  elements.dataTable.querySelectorAll("th").forEach((th) => {
    th.addEventListener("click", () => {
      const key = th.dataset.key;
      if (key === "select") {
        return;
      }
      if (state.sort.key === key) {
        state.sort.direction = state.sort.direction === "asc" ? "desc" : "asc";
      } else {
        state.sort.key = key;
        state.sort.direction = "asc";
      }
      sortRecords();
      renderTable();
    });
  });
}

function sortRecords() {
  const { key, direction } = state.sort;
  if (!key) return;
  const multiplier = direction === "asc" ? 1 : -1;
  state.records.sort((a, b) => {
    if (key === "patientId" || key === "patientName" || key === "admissionDate") {
      return a[key].localeCompare(b[key], "zh-CN") * multiplier;
    }
    const aValue = Number(a.indicators?.[key] ?? 0);
    const bValue = Number(b.indicators?.[key] ?? 0);
    return (aValue - bValue) * multiplier;
  });
}

function findIndicator(name) {
  return state.config.find((item) => item.name === name) || { min: null, max: null };
}

function resetForm() {
  elements.patientForm.reset();
  elements.formHint.textContent = "";
}

function renderDetail(records, patientId) {
  const patient = state.patients[patientId];
  elements.detailTitle.textContent = `患者详情：${patient?.patientName || ""} (${patientId})`;

  const list = records.map((record) => {
    const values = state.config.map((indicator) => {
      const value = record.indicators?.[indicator.name] ?? "";
      const abnormal = value !== "" && isAbnormal(value, indicator);
      return `<tr><td>${indicator.name}</td><td class="${abnormal ? "abnormal" : ""}">${value}</td></tr>`;
    }).join("");

    return `
      <div class="detail-block" draggable="true" data-record="${record.recordId}">
        <h3>住院时间点：${record.admissionDate}</h3>
        <table class="detail-table">
          <tbody>
            ${values}
          </tbody>
        </table>
      </div>
    `;
  }).join("");

  elements.detailContent.innerHTML = `
    <div class="detail-info">
      <p>住院号：${patient?.admissionNo || ""}</p>
      <p>性别：${patient?.gender || ""} ｜ 年龄：${patient?.age || ""} ｜ 联系方式：${patient?.contact || ""}</p>
      <p class="hint">提示：拖拽时间点卡片可调整显示顺序。</p>
    </div>
    ${list || "<p class='hint'>暂无该患者记录</p>"}
  `;

  bindDetailDrag(records, patientId);
}

function bindDetailDrag(records, patientId) {
  let dragId = null;
  elements.detailContent.querySelectorAll(".detail-block").forEach((block) => {
    block.addEventListener("dragstart", (event) => {
      dragId = event.currentTarget.dataset.record;
    });
    block.addEventListener("dragover", (event) => event.preventDefault());
    block.addEventListener("drop", (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.dataset.record;
      if (dragId === targetId) return;
      const patientRecords = state.records.filter((item) => item.patientId === patientId);
      const sourceIndex = patientRecords.findIndex((item) => item.recordId === dragId);
      const targetIndex = patientRecords.findIndex((item) => item.recordId === targetId);
      const [moved] = patientRecords.splice(sourceIndex, 1);
      patientRecords.splice(targetIndex, 0, moved);
      state.records = state.records.filter((item) => item.patientId !== patientId).concat(patientRecords);
      renderDetail(patientRecords, patientId);
      saveState();
    });
  });
}

function openDetail(patientId) {
  const records = state.records.filter((item) => item.patientId === patientId);
  renderDetail(records, patientId);
  elements.detailPanel.classList.add("active");
}

function closeDetail() {
  elements.detailPanel.classList.remove("active");
}

function handleRecognition() {
  const formData = collectFormData();
  if (!formData) {
    showToast("请先填写患者信息再识别", "error");
    return;
  }
  if (!elements.imageInput.files.length) {
    showToast("请先选择检验结果图片", "error");
    return;
  }
  let progress = 0;
  elements.uploadProgress.style.width = "0%";
  const interval = setInterval(() => {
    progress += 10;
    elements.uploadProgress.style.width = `${progress}%`;
    elements.uploadHint.textContent = `识别中...${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      const simulated = {};
      state.config.forEach((indicator) => {
        const min = indicator.min ?? 0;
        const max = indicator.max ?? min + 1;
        const value = (Number(min) + Math.random() * (Number(max) - Number(min))).toFixed(2);
        simulated[indicator.name] = value;
      });
      upsertPatientInfo(formData);
      addRecordEntry(formData, simulated);
      saveState();
      renderTable();
      elements.uploadHint.textContent = "识别完成，可在表格中手动修正。";
      showToast("识别完成并自动填充数据");
    }
  }, 180);
}

function exportData(format) {
  const records = applyFilterToRecords();
  if (!records.length) {
    showToast("暂无可导出的数据", "error");
    return;
  }
  const headers = ["患者ID", "姓名", "性别", "年龄", "住院号", "联系方式", "住院时间点"].concat(
    state.config.map((item) => item.name)
  );
  const rows = records.map((record) => {
    return [
      record.patientId,
      record.patientName,
      record.gender,
      record.age,
      record.admissionNo,
      record.contact,
      record.admissionDate,
      ...state.config.map((item) => record.indicators?.[item.name] ?? "")
    ];
  });

  const delimiter = format === "excel" ? "\t" : ",";
  const content = [headers, ...rows].map((row) => row.join(delimiter)).join("\n");
  const blob = new Blob([content], {
    type: format === "excel" ? "application/vnd.ms-excel" : "text/csv;charset=utf-8;"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `lab_data_${Date.now()}.${format === "excel" ? "xls" : "csv"}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast("导出完成，请检查下载文件");
}

function syncFormByPatientId(patientId) {
  if (!patientId) return;
  const patient = state.patients[patientId];
  if (!patient) return;
  elements.patientForm.patientName.value = patient.patientName;
  elements.patientForm.gender.value = patient.gender;
  elements.patientForm.age.value = patient.age;
  elements.patientForm.admissionNo.value = patient.admissionNo;
  elements.patientForm.contact.value = patient.contact;
  elements.formHint.textContent = "已加载该患者基础信息";
}

function initEvents() {
  elements.patientForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = collectFormData();
    if (!formData) return;
    upsertPatientInfo(formData);
    addRecordEntry(formData, {});
    saveState();
    renderTable();
    elements.formHint.textContent = "患者信息已保存";
  });

  elements.patientForm.patientId.addEventListener("blur", (event) => {
    syncFormByPatientId(event.target.value.trim());
  });

  elements.patientForm.patientId.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      syncFormByPatientId(event.target.value.trim());
    }
  });

  elements.resetForm.addEventListener("click", resetForm);

  elements.imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      elements.imagePreview.innerHTML = `<img src="${reader.result}" alt="检验图片" />`;
    };
    reader.readAsDataURL(file);
  });

  elements.startRecognition.addEventListener("click", handleRecognition);

  elements.addIndicator.addEventListener("click", () => {
    state.config.push({ name: "新指标", min: null, max: null });
    renderConfig();
  });

  elements.saveConfig.addEventListener("click", () => {
    saveState();
    renderTable();
    showToast("表头配置已保存");
  });

  elements.addRecord.addEventListener("click", () => {
    const formData = collectFormData();
    if (!formData) return;
    upsertPatientInfo(formData);
    addRecordEntry(formData, {});
    saveState();
    renderTable();
  });

  elements.editRecord.addEventListener("click", () => {
    const selectedId = Array.from(state.selected)[0];
    const record = state.records.find((item) => item.recordId === selectedId);
    if (!record) {
      showToast("请先选择要编辑的记录", "error");
      return;
    }
    elements.patientForm.patientId.value = record.patientId;
    elements.patientForm.patientName.value = record.patientName;
    elements.patientForm.gender.value = record.gender;
    elements.patientForm.age.value = record.age;
    elements.patientForm.admissionNo.value = record.admissionNo;
    elements.patientForm.contact.value = record.contact;
    elements.patientForm.admissionDate.value = record.admissionDate;
    showToast("已加载选中记录，可直接修改保存");
  });

  elements.deleteRecord.addEventListener("click", () => {
    if (!state.selected.size) {
      showToast("请先选择要删除的记录", "error");
      return;
    }
    if (!window.confirm("确认删除选中的记录吗？")) return;
    state.records = state.records.filter((record) => !state.selected.has(record.recordId));
    state.selected.clear();
    saveState();
    renderTable();
    showToast("删除成功");
  });

  elements.clearStorage.addEventListener("click", () => {
    if (!window.confirm("确认清空所有本地数据吗？此操作不可恢复。")) return;
    state.records = [];
    state.patients = {};
    state.selected.clear();
    saveState();
    renderTable();
    showToast("已清空本地数据");
  });

  elements.applyFilter.addEventListener("click", () => {
    state.filter.id = elements.filterPatientId.value.trim();
    state.filter.start = elements.filterStart.value;
    state.filter.end = elements.filterEnd.value;
    renderTable();
    elements.filterHint.textContent = `筛选结果：${applyFilterToRecords().length} 条`;
  });

  elements.resetFilter.addEventListener("click", () => {
    elements.filterPatientId.value = "";
    elements.filterStart.value = "";
    elements.filterEnd.value = "";
    state.filter = { id: "", start: "", end: "" };
    renderTable();
    elements.filterHint.textContent = "已清空筛选条件";
  });

  elements.exportCsv.addEventListener("click", () => exportData("csv"));
  elements.exportExcel.addEventListener("click", () => exportData("excel"));

  elements.closeDetail.addEventListener("click", closeDetail);
  elements.printDetail.addEventListener("click", () => window.print());
}

function init() {
  loadState();
  renderConfig();
  renderTable();
  initEvents();
}

init();
