const inherits = require("inherits"),
	QueryCompiler = require("knex/lib/query/compiler");

class QueryCompiler_BigQuery extends QueryCompiler {
	constructor (client, builder) {
		super(client, builder);
	}

	insert() {
		throw new Error("insert not supported by BigQuery");
	}

	update() {
		throw new Error("update not supported by BigQuery");
	}

	del() {
		throw new Error("del not supported by BigQuery");
	}

	columnInfo() {
		throw new Error("columnInfo not supported by BigQuery");
	}
}

module.exports = QueryCompiler_BigQuery;
