const STORAGE_KEY = "hypopharyngeal_lab_db_v1";
const CONFIG_KEY = "hypopharyngeal_lab_config_v1";
const LOG_KEY = "hypopharyngeal_lab_logs_v1";

const defaultIndicators = [
  { name: "钾", unit: "mmol/L", min: 3.5, max: 5.5 },
  { name: "钠", unit: "mmol/L", min: 135, max: 145 },
  { name: "氯", unit: "mmol/L", min: 96, max: 108 },
  { name: "钙", unit: "mmol/L", min: 2.1, max: 2.7 },
  { name: "无机磷", unit: "mmol/L", min: 0.8, max: 1.5 },
  { name: "葡萄糖", unit: "mmol/L", min: 3.9, max: 6.1 },
  { name: "尿素", unit: "mmol/L", min: 2.8, max: 7.6 },
  { name: "肌酐(酶法)", unit: "μmol/L", min: 44, max: 133 },
  { name: "尿酸", unit: "μmol/L", min: 150, max: 420 },
  { name: "总蛋白", unit: "g/L", min: 65, max: 85 },
  { name: "白蛋白(溴甲酚绿法)", unit: "g/L", min: 40, max: 55 },
  { name: "总胆红素", unit: "μmol/L", min: 5, max: 21 },
  { name: "直接胆红素", unit: "μmol/L", min: 0, max: 8 },
  { name: "总胆汁酸", unit: "μmol/L", min: 0, max: 10 },
  { name: "丙氨酸氨基转移酶", unit: "U/L", min: 0, max: 40 },
  { name: "天冬氨酸氨基转移酶", unit: "U/L", min: 0, max: 40 },
  { name: "碱性磷酸酶", unit: "U/L", min: 45, max: 125 },
  { name: "γ-谷氨酰转移酶", unit: "U/L", min: 0, max: 60 },
  { name: "肌酸激酶", unit: "U/L", min: 25, max: 200 },
  { name: "肌酸激酶同工酶MB", unit: "U/L", min: 0, max: 25 },
  { name: "乳酸脱氢酶", unit: "U/L", min: 120, max: 250 },
  { name: "高敏CRP", unit: "mg/L", min: 0, max: 10 },
  { name: "同型半胱氨酸", unit: "μmol/L", min: 0, max: 15 },
  { name: "脂蛋白a", unit: "mg/dl", min: 0, max: 30 },
  { name: "CO2结合力", unit: "mmol/L", min: 22, max: 29 },
  { name: "甘油三酯", unit: "mmol/L", min: 0.3, max: 1.7 },
  { name: "总胆固醇", unit: "mmol/L", min: 3.1, max: 5.2 },
  { name: "低密度脂蛋白胆固醇", unit: "mmol/L", min: 0, max: 3.4 },
  { name: "高密度脂蛋白胆固醇", unit: "mmol/L", min: 1.0, max: 1.8 },
  { name: "铁", unit: "μmol/L", min: 7, max: 27 },
  { name: "铁不饱和结合力", unit: "μmol/L", min: 20, max: 50 },
  { name: "总铁结合力", unit: "μmol/L", min: 45, max: 75 },
  { name: "转铁蛋白饱和度", unit: "%", min: 20, max: 50 },
  { name: "免疫球蛋白G", unit: "mg/dl", min: 700, max: 1600 },
  { name: "免疫球蛋白A", unit: "mg/dl", min: 70, max: 400 },
  { name: "免疫球蛋白M", unit: "mg/dl", min: 40, max: 230 },
  { name: "补体C3", unit: "mg/dl", min: 80, max: 160 },
  { name: "补体C4", unit: "mg/dl", min: 10, max: 40 },
  { name: "补体C1q", unit: "mg/L", min: 180, max: 400 },
  { name: "糖链抗原-199", unit: "U/mL", min: 0, max: 37 },
  { name: "糖链抗原-153", unit: "U/mL", min: 0, max: 25 },
  { name: "糖链抗原-125", unit: "U/mL", min: 0, max: 35 },
  { name: "甲胎蛋白", unit: "ng/ml", min: 0, max: 10 },
  { name: "癌胚抗原", unit: "ng/ml", min: 0, max: 5 },
  { name: "总T3", unit: "nmol/L", min: 1.3, max: 3.1 },
  { name: "总T4", unit: "nmol/L", min: 66, max: 181 },
  { name: "游离T3", unit: "pmol/L", min: 3.1, max: 6.8 },
  { name: "游离T4", unit: "pmol/L", min: 12, max: 22 },
  { name: "促甲状腺激素", unit: "mIU/L", min: 0.3, max: 4.2 },
  { name: "甲状腺球蛋白抗体", unit: "IU/mL", min: 0, max: 60 },
  { name: "甲状腺球蛋白", unit: "ng/ml", min: 0, max: 55 },
  { name: "甲状旁腺素", unit: "pg/ml", min: 15, max: 65 },
  { name: "甲状腺过氧化物酶抗体", unit: "IU/mL", min: 0, max: 34 },
  { name: "皮质醇", unit: "μg/dl", min: 5, max: 25 },
  { name: "促卵泡成熟素", unit: "mIU/mL", min: 1, max: 12 },
  { name: "人生长激素", unit: "μg/L", min: 0, max: 10 },
  { name: "促黄体生成素", unit: "mIU/mL", min: 1, max: 12 },
  { name: "血清泌乳素", unit: "ng/ml", min: 4, max: 23 },
  { name: "IL-1", unit: "pg/ml", min: 0, max: 10 },
  { name: "IL-2", unit: "pg/ml", min: 0, max: 10 },
  { name: "IL-4", unit: "pg/ml", min: 0, max: 10 },
  { name: "IL-5", unit: "pg/ml", min: 0, max: 10 },
  { name: "IL-6", unit: "pg/ml", min: 0, max: 10 },
  { name: "IL-8", unit: "pg/ml", min: 0, max: 10 },
  { name: "IL-10", unit: "pg/ml", min: 0, max: 10 },
  { name: "IL-12P70", unit: "pg/ml", min: 0, max: 10 },
  { name: "IL-17", unit: "pg/ml", min: 0, max: 10 },
  { name: "TNF-α", unit: "pg/ml", min: 0, max: 10 },
  { name: "INF-α", unit: "pg/ml", min: 0, max: 10 },
  { name: "INF-γ", unit: "pg/ml", min: 0, max: 10 },
  { name: "降钙素原(PCT)", unit: "ng/ml", min: 0, max: 0.5 },
  { name: "白细胞", unit: "10^9/L", min: 4, max: 10 },
  { name: "淋巴细胞%", unit: "%", min: 20, max: 40 },
  { name: "单核细胞%", unit: "%", min: 3, max: 10 },
  { name: "中性粒细胞%", unit: "%", min: 40, max: 75 },
  { name: "嗜酸性细胞%", unit: "%", min: 0, max: 6 },
  { name: "嗜碱性细胞%", unit: "%", min: 0, max: 1 },
  { name: "淋巴细胞绝对值", unit: "10^9/L", min: 1.1, max: 3.2 },
  { name: "单核细胞绝对值", unit: "10^9/L", min: 0.1, max: 0.6 },
  { name: "中性粒细胞绝对值", unit: "10^9/L", min: 1.8, max: 6.3 },
  { name: "嗜酸性细胞绝对值", unit: "10^9/L", min: 0, max: 0.5 },
  { name: "嗜碱性细胞绝对值", unit: "10^9/L", min: 0, max: 0.1 },
  { name: "红细胞计数", unit: "10^12/L", min: 3.8, max: 5.8 },
  { name: "血红蛋白", unit: "g/L", min: 115, max: 150 },
  { name: "红细胞压积", unit: "%", min: 35, max: 45 },
  { name: "平均红细胞体积", unit: "fL", min: 80, max: 100 },
  { name: "平均血红蛋白量", unit: "pg", min: 27, max: 34 },
  { name: "平均血红蛋白浓度", unit: "g/L", min: 320, max: 360 },
  { name: "红细胞体积宽度%", unit: "%", min: 11, max: 16 },
  { name: "血小板", unit: "10^9/L", min: 100, max: 300 },
  { name: "平均血小板体积", unit: "fL", min: 7, max: 11 },
  { name: "血小板比积", unit: "%", min: 0.1, max: 0.3 },
  { name: "平均血小板宽度", unit: "fL", min: 9, max: 17 },
  { name: "大血小板比率%", unit: "%", min: 0, max: 30 },
  { name: "c-反应蛋白", unit: "mg/L", min: 0, max: 10 },
  { name: "肌钙蛋白I(CTNI)", unit: "ng/L", min: 0, max: 30 }
];

const state = {
  patients: [],
  indicators: [],
  logs: [],
  filter: { patientId: "", start: "", end: "" },
  page: 1,
  pageSize: 10,
  sort: { key: "", direction: "asc" }
};

const form = document.getElementById("patientForm");
const resetFormButton = document.getElementById("resetForm");
const addTimepointButton = document.getElementById("addTimepoint");
const deleteSelectedButton = document.getElementById("deleteSelected");
const timepointManager = document.getElementById("timepointManager");
const tableContainer = document.getElementById("tableContainer");
const pageSizeSelect = document.getElementById("pageSize");
const prevPageButton = document.getElementById("prevPage");
const nextPageButton = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");
const sortStatus = document.getElementById("sortStatus");
const filterPatientId = document.getElementById("filterPatientId");
const filterStart = document.getElementById("filterStart");
const filterEnd = document.getElementById("filterEnd");
const applyFilter = document.getElementById("applyFilter");
const clearFilter = document.getElementById("clearFilter");
const filterStatus = document.getElementById("filterStatus");
const exportCsvButton = document.getElementById("exportCsv");
const exportExcelButton = document.getElementById("exportExcel");
const clearStorageButton = document.getElementById("clearStorage");
const statPatients = document.getElementById("statPatients");
const statTimepoints = document.getElementById("statTimepoints");
const statIndicators = document.getElementById("statIndicators");
const configTable = document.getElementById("configTable");
const addIndicatorButton = document.getElementById("addIndicator");
const saveConfigButton = document.getElementById("saveConfig");
const toast = document.getElementById("toast");
const operatorNameInput = document.getElementById("operatorName");
const uploadProgress = document.getElementById("uploadProgress");
const uploadStatus = document.getElementById("uploadStatus");
const simulateUpload = document.getElementById("simulateUpload");
const parsedPreview = document.getElementById("parsedPreview");
const textUpload = document.getElementById("textUpload");
const applyParsed = document.getElementById("applyParsed");
const applyPatient = document.getElementById("applyPatient");
const applyTimepoint = document.getElementById("applyTimepoint");
const viewLogsButton = document.getElementById("viewLogs");
const exportLogsButton = document.getElementById("exportLogs");
const logList = document.getElementById("logList");
const detailView = document.getElementById("detailView");
const detailBody = document.getElementById("detailBody");
const detailTitle = document.getElementById("detailTitle");
const closeDetail = document.getElementById("closeDetail");
const printDetail = document.getElementById("printDetail");

const batchImportInput = document.createElement("input");
batchImportInput.type = "file";
batchImportInput.accept = ".csv";

const batchImportButton = document.createElement("button");
batchImportButton.type = "button";
batchImportButton.className = "secondary";
batchImportButton.textContent = "批量导入CSV";
exportCsvButton.parentElement?.appendChild(batchImportButton);
exportCsvButton.parentElement?.appendChild(batchImportInput);

const toastTimer = { id: null };

function populateFormFromPatient(patient) {
  if (!patient) return;
  form.patientId.value = patient.id;
  form.name.value = patient.name;
  form.gender.value = patient.gender;
  form.age.value = patient.age;
  form.admissionNo.value = patient.admissionNo;
  form.contact.value = patient.contact;
  form.admissionDate.value = patient.admissionDate;
  renderTimepointManager(patient);
}

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const config = localStorage.getItem(CONFIG_KEY);
  const logs = localStorage.getItem(LOG_KEY);
  state.patients = stored ? JSON.parse(stored) : [];
  state.indicators = config ? JSON.parse(config) : defaultIndicators;
  state.logs = logs ? JSON.parse(logs) : [];
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.patients));
  localStorage.setItem(CONFIG_KEY, JSON.stringify(state.indicators));
  localStorage.setItem(LOG_KEY, JSON.stringify(state.logs));
}

function showToast(message, type = "info") {
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  if (toastTimer.id) {
    clearTimeout(toastTimer.id);
  }
  toastTimer.id = setTimeout(() => {
    toast.className = "toast";
  }, 2400);
}

function logAction(action) {
  const operator = operatorNameInput.value.trim() || "医护人员";
  state.logs.unshift({
    time: new Date().toLocaleString(),
    operator,
    action
  });
  saveState();
}

function normalizeIndicatorName(name) {
  return name.replace(/\s+/g, "").replace(/★|\*/g, "");
}

function getIndicatorMap() {
  const map = new Map();
  state.indicators.forEach((indicator) => {
    map.set(normalizeIndicatorName(indicator.name), indicator);
  });
  return map;
}

function findPatientById(patientId) {
  return state.patients.find((patient) => patient.id === patientId);
}

function ensureTimepoint(patient, date) {
  let timepoint = patient.timepoints.find((tp) => tp.date === date);
  if (!timepoint) {
    timepoint = { id: crypto.randomUUID(), date, labs: {} };
    patient.timepoints.push(timepoint);
  }
  return timepoint;
}

function updateStats() {
  statPatients.textContent = state.patients.length;
  const timepointsCount = state.patients.reduce((sum, patient) => sum + patient.timepoints.length, 0);
  statTimepoints.textContent = timepointsCount;
  const indicatorsCount = state.patients.reduce((sum, patient) => {
    return (
      sum +
      patient.timepoints.reduce((tpSum, tp) => tpSum + Object.keys(tp.labs).length, 0)
    );
  }, 0);
  statIndicators.textContent = indicatorsCount;
}

function renderConfigTable() {
  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>指标名称</th>
        <th>单位</th>
        <th>参考下限</th>
        <th>参考上限</th>
        <th>排序</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");

  state.indicators.forEach((indicator, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input value="${indicator.name}" aria-label="指标名称" /></td>
      <td><input value="${indicator.unit || ""}" aria-label="单位" /></td>
      <td><input type="number" value="${indicator.min ?? ""}" aria-label="参考下限" /></td>
      <td><input type="number" value="${indicator.max ?? ""}" aria-label="参考上限" /></td>
      <td>${index + 1}</td>
      <td>
        <button type="button" class="ghost" data-action="up">上移</button>
        <button type="button" class="ghost" data-action="down">下移</button>
        <button type="button" class="danger" data-action="delete">删除</button>
      </td>
    `;
    row.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => handleIndicatorAction(index, button.dataset.action));
    });
    tbody.appendChild(row);
  });

  configTable.innerHTML = "";
  configTable.appendChild(table);
}

function handleIndicatorAction(index, action) {
  if (action === "delete") {
    state.indicators.splice(index, 1);
  }
  if (action === "up" && index > 0) {
    [state.indicators[index - 1], state.indicators[index]] = [
      state.indicators[index],
      state.indicators[index - 1]
    ];
  }
  if (action === "down" && index < state.indicators.length - 1) {
    [state.indicators[index + 1], state.indicators[index]] = [
      state.indicators[index],
      state.indicators[index + 1]
    ];
  }
  renderConfigTable();
  showToast("配置已更新，请保存", "info");
}

function saveConfig() {
  const rows = configTable.querySelectorAll("tbody tr");
  const updated = [];
  rows.forEach((row) => {
    const inputs = row.querySelectorAll("input");
    updated.push({
      name: inputs[0].value.trim(),
      unit: inputs[1].value.trim(),
      min: inputs[2].value === "" ? null : Number(inputs[2].value),
      max: inputs[3].value === "" ? null : Number(inputs[3].value)
    });
  });
  state.indicators = updated.filter((item) => item.name);
  saveState();
  renderTable();
  showToast("表头配置已保存", "success");
  logAction("更新检验指标配置");
}

function populatePatientSelects() {
  applyPatient.innerHTML = "<option value=\"\">请选择患者</option>";
  state.patients.forEach((patient) => {
    const option = document.createElement("option");
    option.value = patient.id;
    option.textContent = `${patient.id} - ${patient.name}`;
    applyPatient.appendChild(option);
  });
  updateTimepointSelect();
}

function updateTimepointSelect() {
  applyTimepoint.innerHTML = "<option value=\"\">请选择时间点</option>";
  const patient = findPatientById(applyPatient.value);
  if (!patient) return;
  patient.timepoints.forEach((tp) => {
    const option = document.createElement("option");
    option.value = tp.date;
    option.textContent = tp.date;
    applyTimepoint.appendChild(option);
  });
}

function renderTimepointManager(patient) {
  timepointManager.innerHTML = "";
  if (!patient) return;
  patient.timepoints.forEach((tp) => {
    const tag = document.createElement("div");
    tag.className = "timepoint-tag";
    tag.textContent = tp.date;
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "移除";
    removeButton.addEventListener("click", () => removeTimepoint(patient.id, tp.date));
    tag.appendChild(removeButton);
    timepointManager.appendChild(tag);
  });
}

function handlePatientFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const patientId = formData.get("patientId").trim();
  if (!patientId) {
    showToast("患者ID为必填项", "warning");
    return;
  }
  const patient = findPatientById(patientId);
  const admissionDate = formData.get("admissionDate");
  const payload = {
    id: patientId,
    name: formData.get("name").trim(),
    gender: formData.get("gender"),
    age: Number(formData.get("age")),
    admissionNo: formData.get("admissionNo").trim(),
    contact: formData.get("contact").trim(),
    admissionDate
  };
  if (!payload.name || !payload.gender || !payload.admissionNo || !admissionDate) {
    showToast("请完整填写必填信息", "warning");
    return;
  }
  if (patient) {
    Object.assign(patient, payload);
    logAction(`更新患者信息：${patientId}`);
  } else {
    state.patients.push({
      ...payload,
      timepoints: [{ id: crypto.randomUUID(), date: admissionDate, labs: {} }]
    });
    logAction(`新增患者：${patientId}`);
  }
  saveState();
  renderTable();
  populatePatientSelects();
  renderTimepointManager(findPatientById(patientId));
  showToast("患者信息已保存", "success");
}

function resetForm() {
  form.reset();
  timepointManager.innerHTML = "";
}

function addTimepoint() {
  const patientId = form.patientId.value.trim();
  const patient = findPatientById(patientId);
  if (!patient) {
    showToast("请先输入有效患者ID", "warning");
    return;
  }
  const date = prompt("请输入住院时间点日期 (YYYY-MM-DD)");
  if (!date) return;
  ensureTimepoint(patient, date);
  saveState();
  renderTable();
  renderTimepointManager(patient);
  populatePatientSelects();
  logAction(`新增时间点：${patientId} - ${date}`);
  showToast("时间点已添加", "success");
}

function removeTimepoint(patientId, date) {
  if (!confirm(`确认删除时间点 ${date} ?`)) return;
  const patient = findPatientById(patientId);
  if (!patient) return;
  patient.timepoints = patient.timepoints.filter((tp) => tp.date !== date);
  saveState();
  renderTable();
  renderTimepointManager(patient);
  populatePatientSelects();
  logAction(`删除时间点：${patientId} - ${date}`);
  showToast("时间点已删除", "success");
}

function getFlattenedRows() {
  const rows = [];
  state.patients.forEach((patient) => {
    patient.timepoints.forEach((tp) => {
      rows.push({ patient, timepoint: tp });
    });
  });
  return rows;
}

function applyFilters(rows) {
  let result = [...rows];
  if (state.filter.patientId) {
    result = result.filter((row) => row.patient.id === state.filter.patientId);
  }
  if (state.filter.start) {
    result = result.filter((row) => row.timepoint.date >= state.filter.start);
  }
  if (state.filter.end) {
    result = result.filter((row) => row.timepoint.date <= state.filter.end);
  }
  return result;
}

function applySort(rows) {
  if (!state.sort.key) return rows;
  const { key, direction } = state.sort;
  return [...rows].sort((a, b) => {
    if (key === "date") {
      return direction === "asc"
        ? a.timepoint.date.localeCompare(b.timepoint.date)
        : b.timepoint.date.localeCompare(a.timepoint.date);
    }
    const valA = Number(a.timepoint.labs[key] ?? -Infinity);
    const valB = Number(b.timepoint.labs[key] ?? -Infinity);
    return direction === "asc" ? valA - valB : valB - valA;
  });
}

function renderTable() {
  const rows = applySort(applyFilters(getFlattenedRows()));
  const totalPages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const startIndex = (state.page - 1) * state.pageSize;
  const pageRows = rows.slice(startIndex, startIndex + state.pageSize);

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = [
    { key: "select", label: "选择" },
    { key: "id", label: "患者ID" },
    { key: "name", label: "姓名" },
    { key: "date", label: "住院日期" }
  ];
  headers.forEach((header, index) => {
    const th = document.createElement("th");
    th.textContent = header.label;
    if (header.key === "id") th.classList.add("sticky");
    if (header.key === "name") th.classList.add("sticky-2");
    if (header.key === "date") {
      th.addEventListener("click", () => toggleSort("date"));
    }
    addResizer(th, index);
    headerRow.appendChild(th);
  });

  state.indicators.forEach((indicator) => {
    const th = document.createElement("th");
    th.textContent = `${indicator.name} (${indicator.unit || ""})`;
    th.addEventListener("click", () => toggleSort(indicator.name));
    addResizer(th);
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  pageRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.dataset.patientId = row.patient.id;
    tr.dataset.timepoint = row.timepoint.date;
    const selectCell = document.createElement("td");
    selectCell.innerHTML = `<input type="checkbox" data-patient="${row.patient.id}" data-timepoint="${row.timepoint.date}" aria-label="选择行" />`;
    tr.appendChild(selectCell);

    const idCell = document.createElement("td");
    idCell.className = "sticky";
    idCell.innerHTML = `<button type="button" class="ghost link" data-detail="${row.patient.id}">${row.patient.id}</button>`;
    tr.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.className = "sticky-2";
    nameCell.textContent = row.patient.name;
    tr.appendChild(nameCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = row.timepoint.date;
    tr.appendChild(dateCell);

    state.indicators.forEach((indicator) => {
      const cell = document.createElement("td");
      const value = row.timepoint.labs[indicator.name] ?? "";
      cell.textContent = value;
      cell.dataset.indicator = indicator.name;
      if (isOutOfRange(value, indicator)) {
        cell.classList.add("out-of-range");
      }
      cell.addEventListener("dblclick", () => enableCellEdit(cell, row.patient.id, row.timepoint.date));
      tr.appendChild(cell);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);

  tableContainer.querySelectorAll("button[data-detail]").forEach((button) => {
    button.addEventListener("click", () => openDetail(button.dataset.detail));
  });

  pageInfo.textContent = `${state.page}/${totalPages}`;
  sortStatus.textContent = state.sort.key
    ? `按 ${state.sort.key} ${state.sort.direction === "asc" ? "升序" : "降序"}`
    : "未排序";

  updateStats();
}

function addResizer(th) {
  const resizer = document.createElement("div");
  resizer.className = "resizer";
  th.appendChild(resizer);
  let startX = 0;
  let startWidth = 0;
  resizer.addEventListener("mousedown", (event) => {
    startX = event.pageX;
    startWidth = th.offsetWidth;
    document.documentElement.addEventListener("mousemove", onDrag);
    document.documentElement.addEventListener("mouseup", stopDrag);
  });
  const onDrag = (event) => {
    const newWidth = startWidth + event.pageX - startX;
    th.style.width = `${newWidth}px`;
  };
  const stopDrag = () => {
    document.documentElement.removeEventListener("mousemove", onDrag);
    document.documentElement.removeEventListener("mouseup", stopDrag);
  };
}

function isOutOfRange(value, indicator) {
  if (value === "" || value === null || value === undefined) return false;
  const number = Number(value);
  if (Number.isNaN(number)) return true;
  if (indicator.min !== null && indicator.min !== undefined && number < indicator.min) return true;
  if (indicator.max !== null && indicator.max !== undefined && number > indicator.max) return true;
  return false;
}

function enableCellEdit(cell, patientId, timepointDate) {
  if (cell.classList.contains("editing")) return;
  cell.classList.add("editing");
  const original = cell.textContent;
  cell.textContent = "";
  const input = document.createElement("input");
  input.value = original;
  input.type = "text";
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      input.blur();
    }
    if (event.key === "Escape") {
      cell.textContent = original;
      cell.classList.remove("editing");
    }
  });
  input.addEventListener("blur", () => {
    const indicatorName = cell.dataset.indicator;
    const patient = findPatientById(patientId);
    if (!patient) return;
    const timepoint = ensureTimepoint(patient, timepointDate);
    const value = input.value.trim();
    if (value && Number.isNaN(Number(value))) {
      showToast("请输入有效数值", "warning");
      cell.textContent = original;
    } else {
      if (value === "") {
        delete timepoint.labs[indicatorName];
      } else {
        timepoint.labs[indicatorName] = value;
      }
      saveState();
      logAction(`更新指标：${patientId} ${timepointDate} ${indicatorName}`);
      cell.textContent = value;
      const indicator = state.indicators.find((item) => item.name === indicatorName);
      cell.classList.toggle("out-of-range", indicator ? isOutOfRange(value, indicator) : false);
    }
    cell.classList.remove("editing");
  });
  cell.appendChild(input);
  input.focus();
}

function toggleSort(key) {
  if (state.sort.key === key) {
    state.sort.direction = state.sort.direction === "asc" ? "desc" : "asc";
  } else {
    state.sort.key = key;
    state.sort.direction = "asc";
  }
  renderTable();
}

function applyFilterAction() {
  state.filter.patientId = filterPatientId.value.trim();
  state.filter.start = filterStart.value;
  state.filter.end = filterEnd.value;
  state.page = 1;
  const rows = applyFilters(getFlattenedRows());
  filterStatus.textContent = `筛选结果：${rows.length} 条`;
  renderTable();
  logAction("应用数据筛选");
}

function clearFilterAction() {
  state.filter = { patientId: "", start: "", end: "" };
  filterPatientId.value = "";
  filterStart.value = "";
  filterEnd.value = "";
  filterStatus.textContent = "当前显示全部数据";
  renderTable();
}

function exportData(format) {
  const rows = applySort(applyFilters(getFlattenedRows()));
  if (!rows.length) {
    showToast("暂无可导出数据", "warning");
    return;
  }
  const headers = [
    "患者ID",
    "姓名",
    "性别",
    "年龄",
    "住院号",
    "联系方式",
    "住院日期",
    "时间点"
  ];
  const indicatorHeaders = state.indicators.map((indicator) => indicator.name);
  const allHeaders = [...headers, ...indicatorHeaders];
  const lines = [allHeaders.join(",")];
  rows.forEach((row) => {
    const cells = [
      row.patient.id,
      row.patient.name,
      row.patient.gender,
      row.patient.age,
      row.patient.admissionNo,
      row.patient.contact,
      row.patient.admissionDate,
      row.timepoint.date
    ];
    indicatorHeaders.forEach((indicator) => {
      cells.push(row.timepoint.labs[indicator] ?? "");
    });
    lines.push(cells.join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = format === "excel" ? "patient_lab_data.xls" : "patient_lab_data.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("导出完成，请检查下载", "success");
  logAction(`导出数据(${format})`);
}

function clearStorage() {
  if (!confirm("确认清空本地所有数据？")) return;
  state.patients = [];
  state.logs = [];
  saveState();
  renderTable();
  renderConfigTable();
  populatePatientSelects();
  showToast("本地数据已清空", "success");
  logAction("清空本地数据");
}

function parseText() {
  const text = textUpload.value.trim();
  if (!text) {
    showToast("请先输入文本", "warning");
    return;
  }
  uploadStatus.textContent = "识别中...";
  uploadProgress.style.width = "0%";
  let progress = 0;
  const interval = setInterval(() => {
    progress += 15;
    uploadProgress.style.width = `${Math.min(progress, 100)}%`;
    if (progress >= 100) {
      clearInterval(interval);
      const parsed = extractIndicators(text);
      parsedPreview.value = parsed.map((item) => `${item.name},${item.value}`).join("\n");
      uploadStatus.textContent = parsed.length ? "识别完成" : "未识别到指标";
      showToast("识别完成", "success");
    }
  }, 180);
}

function extractIndicators(text) {
  const indicatorMap = getIndicatorMap();
  const results = [];
  const lines = text.split(/\n|\r/).map((line) => line.trim()).filter(Boolean);

  lines.forEach((line) => {
    const parts = line.split(/,|\t|:|：/).map((part) => part.trim()).filter(Boolean);
    if (parts.length >= 2) {
      const nameKey = normalizeIndicatorName(parts[0]);
      const indicator = indicatorMap.get(nameKey);
      const value = parts.find((part) => /[-+]?[0-9]*\.?[0-9]+/.test(part));
      if (indicator && value) {
        results.push({ name: indicator.name, value: value.match(/[-+]?[0-9]*\.?[0-9]+/)[0] });
        return;
      }
    }

    const normalizedLine = normalizeIndicatorName(line);
    indicatorMap.forEach((indicator, key) => {
      if (normalizedLine.startsWith(key)) {
        const match = line.match(/[-+]?[0-9]*\.?[0-9]+/);
        if (match) {
          results.push({ name: indicator.name, value: match[0] });
        }
      }
    });
  });

  return results;
}

function applyParsedResults() {
  const patientId = applyPatient.value;
  const date = applyTimepoint.value;
  if (!patientId || !date) {
    showToast("请选择患者与时间点", "warning");
    return;
  }
  const patient = findPatientById(patientId);
  if (!patient) return;
  const timepoint = ensureTimepoint(patient, date);
  const indicatorMap = getIndicatorMap();
  const lines = parsedPreview.value.split(/\n/).map((line) => line.trim()).filter(Boolean);
  let appliedCount = 0;
  lines.forEach((line) => {
    const [name, value] = line.split(/,|\t|:|：/).map((item) => item.trim());
    if (!name || !value) return;
    const normalizedName = normalizeIndicatorName(name);
    const indicator = indicatorMap.get(normalizedName);
    const match = value.match(/[-+]?[0-9]*\.?[0-9]+/);
    if (indicator && match) {
      timepoint.labs[indicator.name] = match[0];
      appliedCount += 1;
    }
  });
  saveState();
  renderTable();
  if (appliedCount) {
    showToast(`识别结果已应用：${appliedCount} 项`, "success");
  } else {
    showToast("未识别到可应用的指标，请检查预览格式", "warning");
  }
  logAction(`文本识别录入：${patientId} ${date} (${appliedCount}项)`);
}

function openDetail(patientId) {
  const patient = findPatientById(patientId);
  if (!patient) return;
  detailTitle.textContent = `患者详情：${patient.id} - ${patient.name}`;
  const info = `
    <div class="detail-info">
      <p><strong>性别：</strong>${patient.gender} <strong>年龄：</strong>${patient.age}</p>
      <p><strong>住院号：</strong>${patient.admissionNo} <strong>联系方式：</strong>${patient.contact || "--"}</p>
    </div>
  `;
  const timepointList = document.createElement("ul");
  timepointList.className = "timepoint-list";
  patient.timepoints.forEach((tp, index) => {
    const item = document.createElement("li");
    item.draggable = true;
    item.dataset.index = index;
    item.textContent = tp.date;
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", String(index));
    });
    item.addEventListener("dragover", (event) => event.preventDefault());
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      const from = Number(event.dataTransfer.getData("text/plain"));
      const to = Number(item.dataset.index);
      reorderTimepoints(patient, from, to);
    });
    timepointList.appendChild(item);
  });

  const table = document.createElement("table");
  const header = document.createElement("tr");
  header.innerHTML = `
    <th>时间点</th>
    ${state.indicators.map((indicator) => `<th>${indicator.name}</th>`).join("")}
  `;
  table.appendChild(header);
  patient.timepoints.forEach((tp) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${tp.date}</td>
      ${state.indicators
        .map((indicator) => `<td>${tp.labs[indicator.name] ?? ""}</td>`)
        .join("")}
    `;
    table.appendChild(row);
  });

  detailBody.innerHTML = info;
  const reorderHint = document.createElement("p");
  reorderHint.textContent = "拖拽时间点调整顺序，调整后自动保存。";
  detailBody.appendChild(reorderHint);
  detailBody.appendChild(timepointList);
  detailBody.appendChild(table);
  detailView.hidden = false;
}

function reorderTimepoints(patient, fromIndex, toIndex) {
  if (fromIndex === toIndex) return;
  const updated = [...patient.timepoints];
  const [moved] = updated.splice(fromIndex, 1);
  updated.splice(toIndex, 0, moved);
  patient.timepoints = updated;
  saveState();
  openDetail(patient.id);
  renderTable();
  logAction(`调整时间点顺序：${patient.id}`);
}

function closeDetailView() {
  detailView.hidden = true;
}

function printDetailView() {
  window.print();
}

function exportLogs() {
  if (!state.logs.length) {
    showToast("暂无日志", "warning");
    return;
  }
  const lines = ["时间,操作人,操作内容"];
  state.logs.forEach((log) => {
    lines.push(`${log.time},${log.operator},${log.action}`);
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "operation_logs.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("日志已导出", "success");
  logAction("导出操作日志");
}

function toggleLogs() {
  logList.hidden = !logList.hidden;
  if (!logList.hidden) {
    logList.innerHTML = state.logs
      .slice(0, 50)
      .map((log) => `<div>${log.time} - ${log.operator} - ${log.action}</div>`)
      .join("");
  }
}

function handleBatchImport(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    const lines = String(text).split(/\n/).filter(Boolean);
    if (!lines.length) return;
    const headers = lines[0].split(",").map((h) => h.trim());
    let success = 0;
    let fail = 0;
    lines.slice(1).forEach((line) => {
      const values = line.split(",");
      if (values.length < 2) {
        fail += 1;
        return;
      }
      const record = Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ""]));
      if (!record["患者ID"]) {
        fail += 1;
        return;
      }
      const patientId = record["患者ID"].trim();
      const patient = findPatientById(patientId) || {
        id: patientId,
        name: record["姓名"] || "",
        gender: record["性别"] || "",
        age: Number(record["年龄"]) || 0,
        admissionNo: record["住院号"] || "",
        contact: record["联系方式"] || "",
        admissionDate: record["住院日期"] || "",
        timepoints: []
      };
      if (!findPatientById(patientId)) {
        state.patients.push(patient);
      }
      const date = record["时间点"] || record["住院日期"];
      if (!date) {
        fail += 1;
        return;
      }
      const timepoint = ensureTimepoint(patient, date);
      state.indicators.forEach((indicator) => {
        if (record[indicator.name]) {
          timepoint.labs[indicator.name] = record[indicator.name];
        }
      });
      success += 1;
    });
    saveState();
    renderTable();
    populatePatientSelects();
    showToast(`批量导入完成：成功 ${success} 条，失败 ${fail} 条`, "success");
    logAction(`批量导入CSV：成功${success}失败${fail}`);
  };
  reader.readAsText(file, "utf-8");
}

form.addEventListener("submit", handlePatientFormSubmit);
resetFormButton.addEventListener("click", resetForm);
addTimepointButton.addEventListener("click", addTimepoint);
deleteSelectedButton.addEventListener("click", () => {
  const selected = Array.from(tableContainer.querySelectorAll("input[type=checkbox]:checked"));
  if (!selected.length) {
    showToast("请先选择数据", "warning");
    return;
  }
  if (!confirm(`确认删除选中的 ${selected.length} 条记录？`)) return;
  selected.forEach((checkbox) => {
    const patient = findPatientById(checkbox.dataset.patient);
    if (!patient) return;
    patient.timepoints = patient.timepoints.filter((tp) => tp.date !== checkbox.dataset.timepoint);
  });
  state.patients = state.patients.filter((patient) => patient.timepoints.length);
  saveState();
  renderTable();
  showToast("已删除选中数据", "success");
  logAction(`批量删除${selected.length}条记录`);
});

pageSizeSelect.addEventListener("change", () => {
  state.pageSize = Number(pageSizeSelect.value);
  state.page = 1;
  renderTable();
});
prevPageButton.addEventListener("click", () => {
  state.page = Math.max(1, state.page - 1);
  renderTable();
});
nextPageButton.addEventListener("click", () => {
  state.page += 1;
  renderTable();
});
applyFilter.addEventListener("click", applyFilterAction);
clearFilter.addEventListener("click", clearFilterAction);
exportCsvButton.addEventListener("click", () => exportData("csv"));
exportExcelButton.addEventListener("click", () => exportData("excel"));
clearStorageButton.addEventListener("click", clearStorage);
addIndicatorButton.addEventListener("click", () => {
  state.indicators.push({ name: "新指标", unit: "", min: null, max: null });
  renderConfigTable();
});
saveConfigButton.addEventListener("click", saveConfig);
simulateUpload.addEventListener("click", parseText);
applyParsed.addEventListener("click", applyParsedResults);
applyPatient.addEventListener("change", updateTimepointSelect);
viewLogsButton.addEventListener("click", toggleLogs);
exportLogsButton.addEventListener("click", exportLogs);
batchImportButton.addEventListener("click", () => batchImportInput.click());
batchImportInput.addEventListener("change", (event) => handleBatchImport(event.target.files[0]));

closeDetail.addEventListener("click", closeDetailView);
printDetail.addEventListener("click", printDetailView);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !detailView.hidden) {
    closeDetailView();
  }
});

form.patientId.addEventListener("blur", () => {
  const patient = findPatientById(form.patientId.value.trim());
  if (patient) {
    populateFormFromPatient(patient);
    showToast("已加载患者信息", "info");
  }
});

form.querySelectorAll("input[required], select[required]").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim()) {
      input.setCustomValidity("");
    } else {
      input.setCustomValidity("该字段为必填项");
    }
  });
});

loadState();
renderConfigTable();
populatePatientSelects();
renderTable();
