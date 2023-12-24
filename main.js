
const campaign = [
  { ID: "1", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "2", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "3", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "4", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "5", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "6", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "7", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "8", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "9", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "10", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "11", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" },
  { ID: "12", Name: "Chistmas 2020", advertiser: "Foodmarket", group: "Krab", description: "Holiday night during christmas", price: "$2000", startTime: "2020/12/24 19:30", endTime: "2021/01/02 23:00" }
]

const dataPanel = document.querySelector('.data-panel');


function renderDataList(data) {
  let rawHTML = `<table class="main__table">
            <thead class="table__thead">
              <tr class="table__header table__row">
                <th class="table__cell table__cell--checkbox">
                  <input type="checkbox" />
                </th>
                <th class="table__cell table__cell--id">ID</th>
                <th class="table__cell table__cell--name">Name</th>
                <th class="table__cell table__cell--advertiser">
                  <span class="cell__advertiser__line">Advertiser</span>
                  <span class="cell__advertiser__line cell__advertiser__line--group">Group</span>
                </th>
                <th class="table__cell table__cell--description">Descripton</th>
                <th class="table__cell table__cell--price">
                  <span>Price</span>
                  <img class="header__cell__icon header__cell__icon--right"
                    src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/sort.svg" />
                </th>
                <th class="table__cell table__cell--starttime">
                  <span>Start Time</span>
                  <img class="header__cell__icon header__cell__icon--right"
                    src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/sort.svg" />
                </th>
                <th class="table__cell table__cell--endtime">
                  <span>End Time</span>
                  <img class="header__cell__icon header__cell__icon--right"
                    src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/sort.svg" />
                </th>
                <th class="table__cell table__cell--action">Action</th>
              </tr>
            </thead>`
  data.forEach((item) => {
    rawHTML +=
      `<tr class="table__row">
        <td class="table__cell table__cell--checkbox">
          <input type="checkbox" />
        </td>
        <td class="table__cell table__cell--id">${item.ID}</td>
        <td class="table__cell table__cell--name">${item.Name}</td>
        <td class="table__cell table__cell--advertiser">
          <span class="cell__advertiser__line">${item.advertiser}</span>
          <span class="cell__advertiser__line cell__advertiser__line--group">${item.group}</span>
        </td>
        <td class="table__cell table__cell--description">${item.description}</td>
        <td class="table__cell table__cell--price">${item.price}</td>
        <td class="table__cell table__cell--starttime">${item.startTime}</td>
        <td class="table__cell table__cell--endtime">${item.endTime}</td>
         <td class="table__cell table__cell--action">
            <img class="cell__action__icon" src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/menu.svg" id="action__input_${item.ID}" alt="menu">
            <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_1" id="action__menu_${item.ID}">
            <menu class="menu__body">
              <menuitem class="menu__item">
                <img src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/duplicate.svg" class="menu__item__icon"/>
                  <span>Duplicate</span>
                  </menuitem>
                  <menuitem class="menu__item">
                  <img src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/edit.svg"
                        class="menu__item__icon" />
                      <span>Edit</span>
                  </menuitem>
                  <menuitem class="menu__item">
                      <img src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/delete.svg" class="menu__item__icon" />
                      <span>Delete</span>
                      </menuitem>
                    </menu>
                  </div>
                </td>
          </tr>`
  });

  dataPanel.innerHTML = rawHTML;
}
// click handler
const toggleMenu = (event) => {
  // target the menu element associated with the clicked button
  const buttonId = event.target.id;
  const menuId = buttonId.replace("action__input_", "action__menu_");
  const menu = document.getElementById(menuId);

  if (menu) {
    menu.classList.toggle("hidden");
  }

};

// click handler
const toggleRow = (event) => {
  if (event.target.tagName === 'INPUT') {
    const parentElement = event.target.parentElement;
    const grandparentElement = parentElement.parentElement;



    if (grandparentElement.classList.contains('table__header')) {
      // 获取所有的 table__row 元素
      const rows = document.querySelectorAll('.table__row');
      // 遍历所有的 table__row 元素，将它们都设为 checked
      rows.forEach(row => {
        row.classList.toggle('checked', event.target.checked);
        // 找到当前行下的 input 元素，并设置其 checked 属性
        const input = row.querySelector('input');
        input.classList.toggle('checked');
        if (input) {
          input.checked = event.target.checked;
        }

      });
    } else {
      grandparentElement.classList.toggle('checked');
      event.target.classList.toggle('checked');
    }
  }
};



renderDataList(campaign)
dataPanel.addEventListener("click", toggleRow);
dataPanel.addEventListener("click", toggleMenu);
