## Table

## Importing

```javascript
import { Table }from '@thewebuiguy/components/lib/Table';
import { TableRow } from '@thewebuiguy/components/lib/TableRow';
import { TableHeader } from '@thewebuiguy/components/lib/TableHeader';
import { TableCell } from '@thewebuiguy/components/lib/TableCell';

```

## Usage


```jsx
 <Table
  tableHeader={
    <TableRow id="exercise-table-header">
      <TableHeader title="Exercise" />
      <TableHeader title="Description" />
      <TableHeader title="body area" />
      <TableHeader title="" />
    </TableRow>
  }
  tableBody={
    filteredData.map((exercise: Exercise, idx: number) => (
      <TableRow id="exercise-table-row" key={exercise._id}>
        <TableCell title={exercise.name} subtitle={exercise.instructions} />
        <TableCell subtitle={exercise.bodyArea} />
        <TableCell subtitle={exercise.video || 'no media supplied'} />
        <TableCell>
          <div className="flex justify-end">
            <Button id={`edit-${exercise._id}-exercise`} onClick={editExercise(exercise, idx)}>
              Edit
            </Button>

            <Button
              type="error"
              id={`remove-${exercise._id}-exercise`}
              onClick={handleRemoveExercise(exercise)}
              classNames="ml-2">
              Delete
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ))

  }
/>

```