import React from 'react';
import './App.css';

const DATASTORE = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

class App extends React.Component {
    state = {
        linearCount: 0,
        linearMsg: '',
        binaryCount: 0,
        binaryMsg: '',
    }

    linearRef = React.createRef();
    binaryRef = React.createRef();

    linearSearch(item) {
        let data = DATASTORE.slice();
        let counter = 0;
        for (let i = 0; i < data.length; i++) {
            counter++;
            console.log('now looking at: ', data[i])
            if (data[i] === item) {
                this.setState({ linearCount: counter })
                return 'Found it!'
            }
        }

        this.setState({ linearCount: counter })
        return 'Number not found!'
    }

    binarySearch(item, data, start, end, counter = 0) {
        start = (start === undefined) ? 0 : start;
        end = (end === undefined) ? data.length : end;

        if (start > end) {
            this.setState({ binaryCount: counter })
            return 'Number not found!'
        }

        const idx = Math.floor((start + end) / 2);
        const lookingAt = data[idx];
        console.log('now looking at: ', lookingAt);
        counter++;

        if (lookingAt === item) {
            return 'Found it!'
        } else if (lookingAt < item) {
            return this.binarySearch(item, data, idx + 1, end, counter)
        } else if (lookingAt > item) {
            return this.binarySearch(item, data, start, idx - 1, counter)
        }
    }

    handleLinearSubmit = (event) => {
        event.preventDefault();
        this.setState({ 
            linearCount: 0,
            linearMsg: '',
        });
        const item = parseInt(this.linearRef.current.value, 10);
        console.log('item: ', item)

        const msg = this.linearSearch(item);
        this.setState({ linearMsg: msg })

        event.target.reset();
    }

    handleBinarySubmit = (event) => {
        event.preventDefault();
        this.setState({ 
            binaryCount: 0,
            binaryMsg: '',
        });
        const item = parseInt(this.binaryRef.current.value, 10);
        console.log('item: ', item)

        let data = DATASTORE.slice();
        data.sort((a, b) => (a - b));
        console.log('dataset: ', data);
        const msg = this.binarySearch(item, data);
        this.setState({ binaryMsg: msg })

        event.target.reset();
    }

    render() {
        const linearMsg = (this.state.linearMsg) ? `${this.state.linearMsg} That took ${this.state.linearCount} tries.` : '';
        const binaryMsg = (this.state.binaryMsg) ? `${this.state.binaryMsg} That took ${this.state.binaryCount} tries.` : '';

        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Here is our dataset: <code>89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5</code>
                    </p>
                    <div className='bodydiv'>
                        <h3>Linear Search:</h3>
                        <p>Given the above dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.</p>
                        <form onSubmit={e => this.handleLinearSubmit(e)}>
                            <label htmlFor='linearinput'>Look for a number (0-100)</label>
                            <input
                                type='number'
                                min='0'
                                max='100' 
                                id='linearinput'
                                ref={this.linearRef}
                            />
                            <button type='submit'>Search!</button>
                        </form>
                        <h3>{linearMsg}</h3>
                    </div>
                    <div className='bodydiv'>
                        <h3>Binary Search:</h3>
                        <p>Use array.sort to sort the dataset above. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.</p>
                        <form onSubmit={e => this.handleBinarySubmit(e)}>
                            <label htmlFor='binaryinput'>Look for a number (0-100)</label>
                            <input
                                type='number'
                                min='0'
                                max='100' 
                                id='binaryinput'
                                ref={this.binaryRef}
                            />
                            <button type='submit'>Search!</button>
                        </form>
                        <h3>{binaryMsg}</h3>
                    </div>                
                </header>
            </div>
        );
    }
}

export default App;
