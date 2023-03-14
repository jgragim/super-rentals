import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) => [rental.title, rental.owner, rental.city, rental.category, rental.description, rental.type].some(el => el.toLowerCase().includes(query.toLowerCase())));
    }

    return rentals;
  }
}
