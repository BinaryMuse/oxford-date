'use babel';

export default class OxfordDateView {

  DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  MT2016 = { from: '2016-10-09', to: '2016-12-03' }
  HT2017 = { from: '2017-01-15', to: '2017-03-11' }
  TT2017 = { from: '2017-04-23', to: '2017-06-17' }

  MT2017 = { from: '2017-10-08', to: '2017-12-02' }
  HT2018 = { from: '2018-01-14', to: '2018-03-10' }
  TT2018 = { from: '2018-04-22', to: '2018-06-16' }

  MT2018 = { from: '2018-10-07', to: '2018-12-01' }
  HT2019 = { from: '2019-01-13', to: '2019-03-09' }
  TT2019 = { from: '2019-04-28', to: '2019-06-22' }

  constructor(statusBar) {
    this.statusBar = statusBar
    this.root = document.createElement('div')
    this.root.id = 'oxford-date'
    this.root.className = 'inline-block'
    this.root.appendChild(document.createTextNode(this.date))
    this.statusBar.addRightTile({item: this.root, priority: -1})
  }

  destroy() {
    this.root.remove();
  }

  get date() {
    let date = new Date()
    let term = this.term
    if (!term) return 'Vacation'
    return `${this.DAYS[date.getDay()]}, Wk ${1 + Math.floor((date.getTime() - term.getTime())/604800000)}`
  }

  get term() {
    let today = new Date()
    let terms = [this.MT2016, this.HT2017, this.TT2017, this.MT2017, this.HT2018, this.TT2018, this.MT2018, this.HT2019, this.TT2019]
    for (let term of terms) {
      let from = new Date(term.from)
      let to = new Date(term.to)
      if (from <= today && today <= to) return from
    }
    return null
  }
}
